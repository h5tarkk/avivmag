const constants = require('../constants')
const HError = require('../HError')
const storage = require('../storage')
const utils = require('../utils')
const commonAuth = require('../auth')

let silentLoginPromise = null

module.exports = BaaS => {
  const polyfill = BaaS._polyfill
  const API = BaaS._config.API

  // 获取登录凭证 code, 进而换取用户登录态信息
  const auth = () => {
    return new Promise((resolve, reject) => {
      polyfill.wxLogin({
        success: res => {
          return sessionInit(res.code, resolve, reject)
        },
        fail: () => {
          BaaS.request.wxRequestFail(reject)
        },
      })
    })
  }

  // code 换取 session_key，生成并获取 3rd_session 即 token
  const sessionInit = (code, resolve, reject) => {
    return BaaS.request({
      url: API.LOGIN,
      method: 'POST',
      data: {
        code: code
      }
    }).then(utils.validateStatusCode).then(res => {
      storage.set(constants.STORAGE_KEY.UID, res.data.user_id)
      storage.set(constants.STORAGE_KEY.OPENID, res.data.openid || '')
      storage.set(constants.STORAGE_KEY.UNIONID, res.data.unionid || '')
      storage.set(constants.STORAGE_KEY.AUTH_TOKEN, res.data.token)
      storage.set(constants.STORAGE_KEY.EXPIRES_AT, Math.floor(Date.now() / 1000) + res.data.expires_in - 30)
      resolve(res)
    }, reject)
  }

  const silentLogin = () => {
    if (storage.get(constants.STORAGE_KEY.AUTH_TOKEN) && !utils.isSessionExpired()) {
      return Promise.resolve()
    }

    if (!silentLoginPromise) {
      silentLoginPromise = auth().then(res => {
        silentLoginPromise = null
        return res
      }, err => {
        silentLoginPromise = null
        throw err
      })
    }

    return silentLoginPromise
  }


  // 提供给开发者在 button (open-type="getUserInfo") 的回调中调用，对加密数据进行解密，同时将 userinfo 存入 storage 中
  const handleUserInfo = (res) => {
    if (!res || !res.detail) {
      throw new HError(603)
    }

    let detail = res.detail

    // 用户拒绝授权，仅返回 uid, openid 和 unionid
    if (!detail.userInfo) {
      return Promise.reject({
        id: storage.get(constants.STORAGE_KEY.UID),
        openid: storage.get(constants.STORAGE_KEY.OPENID),
        unionid: storage.get(constants.STORAGE_KEY.UNIONID),
      })
    }

    return silentLogin().then(() => {
      let payload = {
        rawData: detail.rawData,
        signature: detail.signature,
        encryptedData: detail.encryptedData,
        iv: detail.iv
      }

      let userInfo = detail.userInfo
      userInfo.id = storage.get(constants.STORAGE_KEY.UID)
      userInfo.openid = storage.get(constants.STORAGE_KEY.OPENID)
      userInfo.unionid = storage.get(constants.STORAGE_KEY.UNIONID)

      return getSensitiveData(payload, userInfo).then(() => commonAuth.currentUser())
    })
  }

  // 上传 signature 和 encryptedData 等信息，用于校验数据的完整性及解密数据，获取 unionid 等敏感数据
  const getSensitiveData = (data, userInfo) => {
    return BaaS.request({
      url: API.AUTHENTICATE,
      method: 'POST',
      data: data
    }).then(utils.validateStatusCode).then(res => {
      if (!userInfo.unionid && res.data.unionid) {
        userInfo.unionid = res.data.unionid
        storage.set(constants.STORAGE_KEY.UNIONID, userInfo.unionid)
      }
    })
  }

  BaaS.auth.handleUserInfo = handleUserInfo
  BaaS.auth.loginWithWechat = () => silentLogin().then(() => commonAuth.currentUser())
  BaaS.auth.silentLogin = silentLogin
}