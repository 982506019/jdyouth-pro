// account.js
// 引入 QCloud 小程序增强 SDK

// 引入配置
var config = require('../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stuid: '',
    pwd: '',
    access_token: ''
  },
  inputId: function (e) {
    this.setData({
      stuid: e.detail.value
    })
  },
  inputPwd: function (e) {
    this.setData({
      pwd: e.detail.value
    })
  },
  login: function (e) {
    const that = this;
    if (this.data.stuid == null && this.data.pwd == null) {
      wx.showToast({
        title: '请填写完整',
      })
    } else {
      wx.showLoading({
        title: 'Loading',
      })
      wx.request({
        url: config.service.stuInfoUrl+ this.data.stuid + '/' + this.data.pwd, //仅为示例，并非真实的接口地址
        success: function (res) {
          wx.hideLoading();
          console.log(res);
          wx.setStorage({
            key: 'stuinfo',
            data: res.data.data,
          })
          const stu = {
            usr: that.data.stuid,
            pwd: that.data.pwd
          }
          wx.setStorage({
            key: 'stu',
            data: stu
          })

          wx.navigateBack({
            delta: 1,
          })
        }
      })



    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})