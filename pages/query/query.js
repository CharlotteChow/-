//query.js
// const util = require('../../utils/util.js')

Page({
  data: {
    array: ['14一级计算机基础及WPS Office应用'
      , '15一级计算机基础及MS Office应用'
      , '16一级计算机基础及Photoshop应用'
      , '24二级C语言程序设计'
      , '26二级VB语言程序设计'
      , '27二级VFP数据库程序设计'
      , '28二级JAVA语言程序设计'
      , '29二级ACCESS数据库程序设计'
      , '61二级C++语言程序设计'
      , '63二级MySQL数据程序设计'
      , '64二级Web程序设计'
      , '65二级MS Office高级应用'],
    objectArray: [
      {
        id: 0,
        name: '14一级'
      },
      {
        id: 1,
        name: '15一级'
      },
      {
        id: 2,
        name: '16一级'
      },
      {
        id: 3,
        name: '24二级'
      },
      {
        id: 4,
        name: '26二级'
      },
      {
        id: 5,
        name: '27二级'
      },
      {
        id: 6,
        name: '28二级'
      },
      {
        id: 7,
        name: '29二级'
      },
      {
        id: 8,
        name: '61二级'
      },
      {
        id: 9,
        name: '63二级'
      },
      {
        id: 10,
        name: '64二级'
      },
      {
        id: 10,
        name: '65二级'
      }
    ],
    index: 0
  },
  saveUserInfo: function () {
    wx.navigateTo({
      url: '../save/save'
    })
  },
  onLoad: function () {
    this.setData({
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }
})
