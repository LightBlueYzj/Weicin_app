// components/message_detail/message_detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ID:'',
    Masg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.ID)
    console.log("msg")
    var paper = JSON.parse(decodeURIComponent(options.ID))
    console.log(paper)
    console.log("msg")
    this.setData({
      Masg:paper,
    })
    console.log(this.data.Masg)
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
  out(){
    wx.navigateTo({
      url: '../../components/out/out?url='+this.data.Masg.attachment,
   })
  }
})