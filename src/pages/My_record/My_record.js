// pages/My_record/My_record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordList:[
      {
        id:'1',
        time:'2021-8-28',
        work:'登记资助信息',
        detail:'工作：登记资助信息 时间：2021-8-28'
      },
      {
        id:'2',
        time:'2021-8-27',
        work:'摸鱼',
        detail:'工作：登记资助信息 时间：2021-8-27'
      },
    ]
  },
  detail(){
    wx.navigateTo({
      url: '../../components/message_detail/message_detail',
    })
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