// demo.js
// 引入 QCloud 小程序增强 SDK
require('../../vendor/sdk-v1.1.6')

// 引入配置
var config = require('../../config');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridsEdu: [
      { title: '查成绩', url: '/pages/jiaowu/grade/grade', icon:'../../images/edu/grade.png' },
      { title: '考试安排', url: '/pages/jiaowu/exam/exam', icon: '../../images/edu/exam.png' },
      { title: '课程表', url: '/pages/jiaowu/course/course', icon: '../../images/edu/course.png' },
      { title: '空教室', url: '/pages/jiaowu/classroom/classroom', icon: '../../images/edu/classroom.png' },
      { title: '校历', url: '/pages/jiaowu/calendar/calendar', icon: '../../images/edu/calendar.png' }
    ],
    gridsBook: [
      { title: '图书查询', url: '', icon: '../../images/book/book.png' },
      { title: '···', url: '', icon: '../../images/all.png' },
      { title: '···', url: '', icon: '../../images/all.png' }
    ]
  },
  onLoad: function () {
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面加载
   */

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

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