import {expectType} from 'tsd'

// wechat
let currentUser_1 = new wx.BaaS.CurrentUser({name: 'name'})
currentUser_1.linkWechat().then(user => expectType<WechatBaaS.CurrentUser>(user))
currentUser_1.linkWechat({detail: {userInfo: {}, encryptedData: '', iv: '', signature: '', rawData: ''}}, {syncUserProfile: false})
  .then(user => expectType<WechatBaaS.CurrentUser>(user))
currentUser_1.updatePassword({password: '123456', newPassword: '654321'})
  .then(user => expectType<WechatBaaS.CurrentUser>(user))
currentUser_1.setEmail('test@gmail.com')
  .then(user => expectType<WechatBaaS.CurrentUser>(user))
currentUser_1.setEmail('test@gmail.com', {sendVerificationEmail: true})
  .then(user => expectType<WechatBaaS.CurrentUser>(user))
currentUser_1.setUsername('username')
  .then(user => expectType<WechatBaaS.CurrentUser>(user))
currentUser_1.requestEmailVerification()
  .then(user => expectType<WechatBaaS.CurrentUser>(user))
currentUser_1.setAccount({username: 'test'})
currentUser_1.setAccount({email: 'test@gmail.com'})
currentUser_1.setAccount({password: '123456'})
currentUser_1.setAccount({username: 'test', email: 'test@gmail.com'})
currentUser_1.setAccount({email: 'test@gmail.com', password: '123456'})
currentUser_1.setAccount({username: 'test', password: '123456'})
currentUser_1.setAccount({username: 'test', email: 'test@gmail.com', password: '123456'})
currentUser_1.setAccount({})
  .then(user => expectType<WechatBaaS.CurrentUser>(user))
currentUser_1.setMobilePhone('15000000000')
  .then(user => expectType<WechatBaaS.CurrentUser>(user))
currentUser_1.verifyMobilePhone('123456')
  .then(user => expectType<WechatBaaS.CurrentUser>(user))
expectType<WechatBaaS.UserRecord>(currentUser_1 as WechatBaaS.UserRecord)
expectType<Object>(currentUser_1.toJSON())
expectType<any>(currentUser_1.get('key'))

// qq
let currentUser_2 = new qq.BaaS.CurrentUser({name: 'name'})
currentUser_2.linkQQ().then(user => expectType<QqBaaS.CurrentUser>(user))
currentUser_2.linkQQ({detail: {userInfo: {}, encryptedData: '', iv: '', signature: '', rawData: ''}}, {syncUserProfile: false})
  .then(user => expectType<QqBaaS.CurrentUser>(user))
currentUser_2.updatePassword({password: '123456', newPassword: '654321'})
  .then(user => expectType<QqBaaS.CurrentUser>(user))
currentUser_2.setEmail('test@gmail.com')
  .then(user => expectType<QqBaaS.CurrentUser>(user))
currentUser_2.setEmail('test@gmail.com', {sendVerificationEmail: true})
  .then(user => expectType<QqBaaS.CurrentUser>(user))
currentUser_2.setUsername('username')
  .then(user => expectType<QqBaaS.CurrentUser>(user))
currentUser_2.requestEmailVerification()
  .then(user => expectType<QqBaaS.CurrentUser>(user))
currentUser_2.setAccount({username: 'test'})
currentUser_2.setAccount({email: 'test@gmail.com'})
currentUser_2.setAccount({password: '123456'})
currentUser_2.setAccount({username: 'test', email: 'test@gmail.com'})
currentUser_2.setAccount({email: 'test@gmail.com', password: '123456'})
currentUser_2.setAccount({username: 'test', password: '123456'})
currentUser_2.setAccount({username: 'test', email: 'test@gmail.com', password: '123456'})
currentUser_2.setAccount({})
  .then(user => expectType<QqBaaS.CurrentUser>(user))
currentUser_2.setMobilePhone('15000000000')
  .then(user => expectType<QqBaaS.CurrentUser>(user))
currentUser_2.verifyMobilePhone('123456')
  .then(user => expectType<QqBaaS.CurrentUser>(user))
expectType<QqBaaS.UserRecord>(currentUser_2 as QqBaaS.UserRecord)
expectType<Object>(currentUser_2.toJSON())
expectType<any>(currentUser_2.get('key'))

// baidu
let currentUser_3 = new swan.BaaS.CurrentUser({name: 'name'})
currentUser_3.linkBaidu().then(user => expectType<BaiduBaaS.CurrentUser>(user))
currentUser_3.linkBaidu({detail: {userInfo: {}, encryptedData: '', iv: '', signature: '', rawData: ''}}, {syncUserProfile: false})
  .then(user => expectType<BaiduBaaS.CurrentUser>(user))
currentUser_3.updatePassword({password: '123456', newPassword: '654321'})
  .then(user => expectType<BaiduBaaS.CurrentUser>(user))
currentUser_3.setEmail('test@gmail.com')
  .then(user => expectType<BaiduBaaS.CurrentUser>(user))
currentUser_3.setEmail('test@gmail.com', {sendVerificationEmail: true})
  .then(user => expectType<BaiduBaaS.CurrentUser>(user))
currentUser_3.setUsername('username')
  .then(user => expectType<BaiduBaaS.CurrentUser>(user))
currentUser_3.requestEmailVerification()
  .then(user => expectType<BaiduBaaS.CurrentUser>(user))
currentUser_3.setAccount({username: 'test'})
currentUser_3.setAccount({email: 'test@gmail.com'})
currentUser_3.setAccount({password: '123456'})
currentUser_3.setAccount({username: 'test', email: 'test@gmail.com'})
currentUser_3.setAccount({email: 'test@gmail.com', password: '123456'})
currentUser_3.setAccount({username: 'test', password: '123456'})
currentUser_3.setAccount({username: 'test', email: 'test@gmail.com', password: '123456'})
currentUser_3.setAccount({})
  .then(user => expectType<BaiduBaaS.CurrentUser>(user))
currentUser_3.setMobilePhone('15000000000')
  .then(user => expectType<BaiduBaaS.CurrentUser>(user))
currentUser_3.verifyMobilePhone('123456')
  .then(user => expectType<BaiduBaaS.CurrentUser>(user))
expectType<BaiduBaaS.UserRecord>(currentUser_3 as BaiduBaaS.UserRecord)
expectType<Object>(currentUser_3.toJSON())
expectType<any>(currentUser_3.get('key'))

// alipay
let currentUser_4 = new my.BaaS.CurrentUser({name: 'name'})
currentUser_4.linkAlipay()
currentUser_4.linkAlipay({forceLogin: false})
currentUser_4.linkAlipay({syncUserProfile: false})
currentUser_4.linkAlipay({forceLogin: true, syncUserProfile: false})
  .then(user => expectType<AlipayBaaS.CurrentUser>(user))
currentUser_4.updatePassword({password: '123456', newPassword: '654321'})
  .then(user => expectType<AlipayBaaS.CurrentUser>(user))
currentUser_4.setEmail('test@gmail.com')
  .then(user => expectType<AlipayBaaS.CurrentUser>(user))
currentUser_4.setEmail('test@gmail.com', {sendVerificationEmail: true})
  .then(user => expectType<AlipayBaaS.CurrentUser>(user))
currentUser_4.setUsername('username')
  .then(user => expectType<AlipayBaaS.CurrentUser>(user))
currentUser_4.requestEmailVerification()
  .then(user => expectType<AlipayBaaS.CurrentUser>(user))
currentUser_4.setAccount({username: 'test'})
currentUser_4.setAccount({email: 'test@gmail.com'})
currentUser_4.setAccount({password: '123456'})
currentUser_4.setAccount({username: 'test', email: 'test@gmail.com'})
currentUser_4.setAccount({email: 'test@gmail.com', password: '123456'})
currentUser_4.setAccount({username: 'test', password: '123456'})
currentUser_4.setAccount({username: 'test', email: 'test@gmail.com', password: '123456'})
currentUser_4.setAccount({})
  .then(user => expectType<AlipayBaaS.CurrentUser>(user))
currentUser_4.setMobilePhone('15000000000')
  .then(user => expectType<AlipayBaaS.CurrentUser>(user))
currentUser_4.verifyMobilePhone('123456')
  .then(user => expectType<AlipayBaaS.CurrentUser>(user))
expectType<AlipayBaaS.UserRecord>(currentUser_4 as AlipayBaaS.UserRecord)
expectType<Object>(currentUser_4.toJSON())
expectType<any>(currentUser_4.get('key'))

// web
let currentUser_5 = new window.BaaS.CurrentUser({name: 'name'})
currentUser_5.linkThirdParty('test', 'test.html')
currentUser_5.linkThirdParty('test', 'test.html', {})
currentUser_5.linkThirdParty('test', 'test.html', {debug: false})
currentUser_5.linkThirdParty('test', 'test.html', {debug: false, mode: 'popup-window'})
currentUser_5.linkThirdParty('test', 'test.html', {debug: false, mode: 'popup-iframe'})
currentUser_5.linkThirdParty('test', 'test.html', {debug: false, mode: 'redirect'})
currentUser_5.linkThirdParty('test', 'test.html', {debug: false, mode: 'redirect', authModalStyle: {}, wechatIframeContentStyle: {}, windowFeatures: 'test', syncUserProfile: false})
  .then(user => expectType<WebBaaS.CurrentUser>(user))
currentUser_5.updatePassword({password: '123456', newPassword: '654321'})
  .then(user => expectType<WebBaaS.CurrentUser>(user))
currentUser_5.setEmail('test@gmail.com')
  .then(user => expectType<WebBaaS.CurrentUser>(user))
currentUser_5.setEmail('test@gmail.com', {sendVerificationEmail: true})
  .then(user => expectType<WebBaaS.CurrentUser>(user))
currentUser_5.setUsername('username')
  .then(user => expectType<WebBaaS.CurrentUser>(user))
currentUser_5.requestEmailVerification()
  .then(user => expectType<WebBaaS.CurrentUser>(user))
currentUser_5.setAccount({username: 'test'})
currentUser_5.setAccount({email: 'test@gmail.com'})
currentUser_5.setAccount({password: '123456'})
currentUser_5.setAccount({username: 'test', email: 'test@gmail.com'})
currentUser_5.setAccount({email: 'test@gmail.com', password: '123456'})
currentUser_5.setAccount({username: 'test', password: '123456'})
currentUser_5.setAccount({username: 'test', email: 'test@gmail.com', password: '123456'})
currentUser_5.setAccount({})
  .then(user => expectType<WebBaaS.CurrentUser>(user))
currentUser_5.setMobilePhone('15000000000')
  .then(user => expectType<WebBaaS.CurrentUser>(user))
currentUser_5.verifyMobilePhone('123456')
  .then(user => expectType<WebBaaS.CurrentUser>(user))
expectType<WebBaaS.UserRecord>(currentUser_5 as WebBaaS.UserRecord)
expectType<Object>(currentUser_5.toJSON())
expectType<any>(currentUser_5.get('key'))