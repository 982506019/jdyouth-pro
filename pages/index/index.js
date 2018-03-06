/**
 * @fileOverview 演示会话服务和 WebSocket 信道服务的使用方式
 */

// 引入 QCloud 小程序增强 SDK
// var qcloud = require('../../vendor/qcloud-weapp-client-sdk/index');
require('../../vendor/sdk-v1.1.6')

// 引入配置
var config = require('../../config');

var contentGroupID = 1510919303279159
var myContentGroup = new wx.BaaS.ContentGroup(contentGroupID)

/**
 * 使用 Page 初始化页面，具体可参考微信公众平台上的文档
 */
Page({
  /**
   * 初始数据，我们把服务地址显示在页面上
   */
  data: {
    list: null,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 200
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  tap: function (e) {
    console.log(e)
  },
  onLoad: function (options) {
    var that = this

    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          clientHeight: res.windowHeight
        })
      },
    })

    // let query = new wx.BaaS.Query()

    myContentGroup.find().then((res) => {
      // console.log(res)
      that.setData({
        list: res.data.objects
      })
    }, (err) => {

    })
  },
  onPullDownRefresh: function () {
    let that = this
    console.log('--------下拉刷新-------')
    wx.showNavigationBarLoading() //在标题栏中显示加载
    myContentGroup.find().then((res) => {
      // console.log(res)
      that.setData({
        list: res.data.objects
      })
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      console.log("tingzhi")
    }, (err) => {

    })
    
  },
  onShow: function (){
    let that = this
    console.log('--------下拉刷新-------')
    wx.showNavigationBarLoading() //在标题栏中显示加载
    myContentGroup.find().then((res) => {
      // console.log(res)
      that.setData({
        list: res.data.objects
      })
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
      console.log("tingzhi")
    }, (err) => {

    })
  }

});
