// classroom.js
// 引入 QCloud 小程序增强 SDK
require('../../../vendor/sdk-v1.1.6')

// 引入配置
var config = require('../../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: null,
    pageSize: null,
    curPageNo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'Loading',
    })
    const that = this;
    qcloud.request({
      url: 'https://83480195.qcloud.la/room?i=0',
      success: function (response) {
        wx.hideLoading();
        console.log(response.data)
        that.setData({
          list: response.data.data.list,
          pageSize: response.data.data.pageSize,
          curPageNo: response.data.data.curPageNo
        })
      },
      fail: function (err) {
        console.log(err);
      }
    });
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
    const that = this;
    
    if (this.data.curPageNo < this.data.pageSize) {
      wx.showLoading({
        title: 'Loading',
      })
      qcloud.request({
        url: 'https://83480195.qcloud.la/room?i=' + (parseInt(that.data.curPageNo) + 1),
        success: function (response) {
          console.log(response.data.data)
          wx.hideLoading();
          that.setData({
            list: that.data.list.concat(response.data.data.list),
            pageSize: response.data.data.pageSize,
            curPageNo: response.data.data.curPageNo
          })
        },
        fail: function (err) {
          console.log(err);
        }
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})