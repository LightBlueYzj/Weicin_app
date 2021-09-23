// pages/main/main.js
var app = getApp();
Page({

  data: {
    // 轮播图数据
    current: 0,  //当前所在页面的 index
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔
    duration: 800, //滑动动画时长
    circular: true, //是否采用衔接滑动

    //轮播图图片链接
    imgUrls: [
    'https://p3.pstatp.com/large/43700001e49d85d3ab52',
    'https://p3.pstatp.com/large/39f600038907bf3b9c96',
    'https://p3.pstatp.com/large/31fa0003ed7228adf421'
    ],

    links: [
      '/pages/main/main'
    ],
    options:[],
  },
onLoad:function(res) {
    var that = this; 
    wx.request({
        url: 'http://192.168.3.222:3000/api/v1/article',
        //post请求 "Content-Type": "application/x-www-form-urlencoded"  post上传数据要string类型，所以需要转化；
        //get请求 默认"Content-Type": application/json
        header: {
          "Content-Type": "application/x-www-form-urlencoded"  // post
        },                       
        success:function(res) {
            //请求数据成功的回调函数
            console.log(res.data)
            that.setData({
              options:res.data.data
            })
        },
        complete: function (res) {
          console.log("请求失败")
              //请求完成的回调函数
        },
    })
    app.globalData.Message = this.data.options; //将获得的通知信息存在全局变量中
    console.log("全局变量为"+app.globalData.Message)
  },
  //轮播图的切换事件
  swiperChange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //点击指示点切换
  chuangEvent: function(e) {
    this.setData({
      swiperCurrent: e.currentTarget.ID
    })

  },
  //点击图片触发事件
  swipclick: function(e) {
    console.log(this.data.swiperCurrent);
    wx.switchTab({
      url: this.data.links[this.data.swiperCurrent]

    })

  }
})