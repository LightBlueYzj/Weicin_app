var app = getApp();
Page({
  data:{
    userIfor: '',
    code:'',
    workerAttestation:''
  },
  onLoad(){
    let user = wx.getStorageSync('user')
    let getwork =wx.getStorageSync('workerAttestation')
    console.log(getwork)
    this.setData({
      userIfor : user, 
      workerAttestation:getwork
    })
    console.log(this.data.workerAttestation)
  },
  login(){
    let that = this
    //以下注释代码用于获取用户登录code用来获取用户openid 

    // wx.login({
    //   success: function(res) {
    //     if (res.code) {
    //       //发起网络请求
    //       wx.request({
    //          url: 'https://test.com/onLogin',  //服务器地址
    //         data: {
    //           code: res.code
    //         }
    //       })
    //       app.globalData.code = that.data.code
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   }
    // });
    // console.log(this.data.code)
    wx.getUserProfile({ //获取用户登录信息
      desc:"必须授权才可以继续使用",
      success: res=>{
        let user = res.userInfo
        wx.setStorageSync('user', user) //把用户信息缓存到本地
        this.setData({
          userIfor : user 
        })
      },
      fail:res=>{
        console.log("授权失败", res)
      }
    })
  },
  //退出登录
  loginOut(){
    console.log("退出登录")
    this.setData({
      userIfor : '' //清除本次登录信息
    })
    wx.setStorageSync('user', null) //将缓存用户信息置为空
    wx.setStorageSync('workerAttestation', null)
    wx.setStorageSync('studentAttestation', null)
  },
  my_information(){
    wx.reLaunch({
      url: '../../pages/MyInformation/MyInformation'
    })
  },
  to_work(){
    wx.reLaunch({
      url: '../../pages/worker/worker'
    })
  },
  about(){
    wx.reLaunch({
      url: '../../pages/AboutUs/AboutUs'
    })
  },
  feedback(){
    // 反馈建议事件
  },
  student(){
    wx.reLaunch({
      url: '../../pages/student/student'
    })
  }
})