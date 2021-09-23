// pages/worker/worker.js
var get_name='';
var get_id='';
var get_major='';
var get_code='';
var station = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname:"",
    Person:{
      name:'',
      student_id:'',
      major:'',
      invite_code:'',
      get_station:''
    },
    success:false,
    majors:[
      {
        "id": "001",
        "name": "软件工程"
      },
      {
        "id": "002",
        "name": "土木工程"
      }
    ],
    stations:[
      {
        "id": "001",
        "name": "勤助"
      },
      {
        "id": "002",
        "name": "校团委"
      },
      {
        "id": "003",
        "name": "院团委"
      }
    ],
  },
    // 点击下拉显示框
    selectTap(){
    this.setData({
     show: !this.data.show
    });
    },
    selectTap1(){
    this.setData({
       show1: !this.data.show1
      });
      },
    // 点击下拉列表
    selectTap2(){
      this.setData({
         show2: !this.data.show2
        });
        },
      // 点击下拉列表
    optionTap(e){
    let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    console.log(e)
    this.setData({
     index:Index,
     show:!this.data.show
    });
    },
    about(){
      wx.reLaunch({
        url: '../../pages/mine_block/mine_block'
      })
    },
    optionTap1(e){
      console.log(e)
      let Index1=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      this.setData({
       index1:Index1,
       show1:!this.data.show1
      });
    },
    optionTap2(e){
      let Index=e.currentTarget.dataset.index;//获取点击的下拉列表的下标
      console.log(e)
      this.setData({
       index2:Index,
       show2:!this.data.show2
      });
    },
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user = wx.getStorageSync('user')
    this.setData({
      nickname:user.nickName
    })

  },
  get_name(e){
    get_name = e.detail.value
  },
  getid(e){
    get_id = e.detail.value
  },
  get_major(e){
    get_major = e.detail.name
  },
  get_inviteCode(e){
    get_code = e.detail.value
  },
  change: function(e) {
    console.log(e.detail)
  },
  get_station(e){
    station = e.detail.name
  },
  submit(evaul){
    if(get_name == "" ||get_id == ""||get_major == ""||station == ""||get_code == ""){
      this.setData({
        success:true
      })
      setTimeout(function () {
        this.setData({
          success:false
        })
       }, 2000) 
    }
    else{
      this.setData({
        Person:{
          name:get_name,
          student_id:get_id,
          major:get_major,
          invite_code:get_code,
          get_station: station
        },
        success:false
      })
      console.log(this.data.Person)
      wx.setStorageSync('workerAttestation', this.data.Person) //把认证信息缓存到本地
      wx.showToast({
        title: '认证信息提交成功',
        icon: 'success',
        duration: 3000
      });
      setTimeout(function () {
        wx.reLaunch({
          url: '../../pages/mine_block/mine_block'
        })
       }, 2000) 
      console.log(this.data.Person)
    }
  }
})