// pages/worker/worker.js
var get_name='';
var get_sex ='';
var get_id='';
var get_collage='';
var get_major='';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    success:'',
    nickname:"",
    Person:{
      name:'',
      sex:'',
      student_id:'',
      collage:'',
      major:'',
    },
    options:[
      {
        "id": "001",
        "name": "男"
      },
      {
        "id": "002",
        "name": "女"
      }
    ],
    colloges:[
      {
        "id": "001",
        "name": "计算机学院"
      },
      {
        "id": "002",
        "name": "电气学院"
      },
      {
        "id": "003",
        "name": "机械学院"
      },
      {
        "id": "004",
        "name": "理学院"
      },
      {
        "id": "005",
        "name": "材料学院"
      },
      {
        "id": "006",
        "name": "人文学院"
      },
      {
        "id": "007",
        "name": "经管学院"
      },
      {
        "id": "008",
        "name": "城建学院"
      },
      {
        "id": "009",
        "name": "化学与工程学院"
      },
      {
        "id": "010",
        "name": "轨道交通学院"
      },
      {
        "id": "011",
        "name": "电气学院"
      },
      {
        "id": "012",
        "name": "外国语学院"
      },
      {
        "id": "013",
        "name": "环境工程学院"
      },
      {
        "id": "014",
        "name": "艺术学院"
      },
      {
        "id": "015",
        "name": "工程创新学院"
      },
    ],
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
    show:false,//控制下拉列表的显示隐藏，false隐藏、true显示
    show1:false,
    show2:false,
    selectData:['请点击选择','电气学院','计算机学院','机械学院','化工学院','理学院','外国语学院'],//下拉列表的数据
    major:['软件工程','材料力学','机械设计及其自动化','化学工程','土木工程'],
    sex:['男','女'],
    index:0,//选择的下拉列表下标
    index1:0,
    index2:1
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
  get_sex(e){
    get_sex = e.detail.name
  },
  getid(e){
    get_id = e.detail.value
  },
  get_collage(e){
    get_collage = e.detail.name
  },
  get_major(e){
    get_major = e.detail.name
  },
  change: function(e) {
    console.log(e.detail)
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