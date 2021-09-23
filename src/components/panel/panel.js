// components/panel/panel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Msg:{
      type:JSON,
      value:''
    },
    paper:{
      type:JSON,
      value:{
        "ID":0,
        "source":"资助管理中心",
        "title":"2021-2022学年生源地贷款的通知",
        "contentPart":"我是部分内容",
        "contentFull":"我是完整内容",
        "author":"叶菁",
        "time":"2021-8-15",
        "phone":"60873022"
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    get_paper:""
  },
  /**
   * 组件的方法列表
   */
  methods: {
    get_MsgDetail(){
      var detail = this.data.get_paper
      console.log("detail:"+this.data.get_paper.ID)
      console.log(this.data.get_paper)
      var paper = encodeURIComponent(JSON.stringify(this.data.get_paper))
      wx.navigateTo({
        url: '../../components/message_detail/message_detail?ID='+ paper,
        success: function(res) {
          console.log("跳转成功")
        },
        fail: function(res) {
        },
       })
    }
  },
  lifetimes: {
    attached() {
      let txt = this.data.Msg
      this.setData({
        get_paper:txt
      })
      console.log("文章信息："+txt)
    }
  }
})
