module.exports = {
  wxLogin(...args) {
    return wx.login(...args)
  },
  wxGetUserInfo(...args) {
    return wx.getUserInfo(...args)
  },
  wxPaymentRequest(...args) {
    return wx.requestPayment(...args)
  },
  getAPIHost(clientID) {
    return `https://${clientID}.myminapp.com`
  },
  SDK_TYPE: 'file',
  setStorageSync(k, v) {
    return wx.setStorageSync(k, v)
  },
  getStorageSync(k) {
    return wx.getStorageSync(k)
  },
  getSystemInfoSync() {
    return wx.getSystemInfoSync()
  }
}