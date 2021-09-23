// components/functional_block/functional_block.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  look_time(){
    wx.navigateTo({
      url: '../../pages/My_schedule/My_schedule',
      success: function(res) {
        console.log("跳转成功")
      },
      fail: function(res) {
        console.log("跳转失败")
      },
      complete: function(res) {
        console.log("跳转成功")
      },
     })
  },
  my_time(){
    wx.navigateTo({
      url: '../../pages/My_record/My_record',
    })
  },
  openToast: function () {
    wx.showToast({
    title: '该功能正在完善请纳新等候',
    icon: 'success',
    duration: 3000
    });
    },
})