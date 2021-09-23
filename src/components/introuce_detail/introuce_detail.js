// components/message_detail/message_detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    Masg:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this.data;
    var get_msg='';
    if(options.id){
      that.id =options.id
      get_msg = app.globalData.stations[this.data.id]
      this.setData({
        Masg:get_msg,
      })
      console.log(this.data.Masg)
    }
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
  }
})