// pages/MyInformation/MyInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [
      //上课长度全部默认为两节课
       { "xqj": 1, "sksj": 1, "skcd":2, "kcxx": "勤助"},
       { "xqj": 1, "sksj": 3, "skcd": 2, "kcxx": "签到"},
       { "xqj": 2, "sksj": 5, "skcd": 2, "kcxx": "打篮球"},
     ]
  },
  about(){
    wx.navigateBack({ 
      delta: 1, // 回退前 delta(默认为1) 页面 
      success: function (res) { 
      // success 
      }, 
      fail: function () { 
      // fail 
      }, 
      complete: function () { 
      // complete 
      } 
      }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
})