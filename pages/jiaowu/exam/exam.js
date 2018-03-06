// exam.js
// 引入 QCloud 小程序增强 SDK
require('../../../vendor/sdk-v1.1.6')

// 引入配置
var config = require('../../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exam:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.showLoading({
      title: 'Loading',
    })
    wx.getStorage({
      key: 'stu',
      success: function(res) {
        wx.request({
          url: config.service.examUrl+res.data.usr+'/'+res.data.pwd,
          success: function (response) {
            wx.hideLoading();
            that.setData({
              exam:response.data.data
            })
          },
          fail: function (err) {
            console.log(err);
          }
        });
      },
    })
    
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