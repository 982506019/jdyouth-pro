/**
 * @fileOverview 微信小程序的入口文件
 */

// var qcloud = require('./vendor/sdk-v1.1.3');
var config = require('./config');

App({
    /**
     * 小程序初始化时执行，我们初始化客户端的登录地址，以支持所有的会话操作
     */
    onLaunch() {
      require('./vendor/sdk-v1.1.6')
      let clientID = 'd08b61fde8e940a224f7'
      wx.BaaS.init(clientID)
    }
});