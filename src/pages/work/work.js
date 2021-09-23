// pages/work/work.js
var app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    notice:
    [
    {
      id:'0',
      url: "url",
      title:"上海应用技术大学2021秋季开学通知"
    },
    {
    id:'1',
    url: "url",
    title:"上海应用技术大学生源地贷款通知"
    },
    {
    id:'2',
    url: "url",
    title:"上海应用技术大学高校助学贷款通知"
    }
  ],
    stations:[
      {
        id:"0",
        name: "勤助",
        introduce:"上海应用技术大学勤工助学部是直属校领导的的一个机构"
      },
      {
        id:"1",
        name: "校团委",
        introduce:"上海应用技术大学勤工助学部是直属校领导的的一个机构"
      },
      {
        id:"2",
        name: "院团委",
        introduce:"上海应用技术大学勤工助学部是直属校领导的的一个机构"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let get_user = wx.getStorageSync('workerAttestation')
    // 此处添加接口获得学校各个部门介绍的信息
    app.globalData.stations = this.data.stations
    this.setData({
      user:get_user,
    })

  },

  about(){
    wx.reLaunch({
      url: '../../pages/main/main'
    })
  }
})