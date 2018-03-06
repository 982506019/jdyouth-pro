// pages/search/search.js
require('../../vendor/sdk-v1.1.6')

var contentGroupID = 1510919303279159
var myContentGroup = new wx.BaaS.ContentGroup(contentGroupID)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView:true,
    inputText:'',
    resultList:[]
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
  
  },
  bindinput: function (e) {
    let that = this
    if(e.detail.value != ""){
      this.setData({
        inputText: e.detail.value
      })
      var query = new wx.BaaS.Query()
      query.contains('title', that.data.inputText)
      myContentGroup.setQuery(query).find().then((res) => {
        console.log(res)
        that.setData({
          resultList: res.data.objects
        })
      }, (err) => {

      })
    }
    
  },
  bindconfirm: function(e){
    let that = this
    var query = new wx.BaaS.Query()
    query.contains('title', this.data.inputText)
    myContentGroup.setQuery(query).find().then((res) => {
      console.log(res)
      that.setData({
        resultList: res.data.objects
      })
    }, (err) => {

    })
  }
})