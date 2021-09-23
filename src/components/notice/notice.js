// components/notice/notice.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msgList:{
      type:Array,
      value:[]
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    get_notice:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached() {
      let txt = this.data.msgList
      this.setData({
        get_notice:txt
      })
      console.log(this.data.get_notice)
    }
  }
})
