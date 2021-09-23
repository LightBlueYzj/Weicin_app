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
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180826%2F015ef30a08884835b94ce503d33a230f.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632901203&t=45598bf55d145c447c29b0bcf8e57caa',
    'https://img1.baidu.com/it/u=1897690053,3613900838&fm=26&fmt=auto&gp=0.jpg',
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.wowodx.com%2Fwow_article_img%2Fshanghaiyingyongjishudaxue%2Fjpeg%2Fbd39127f-96ba-4194-85b6-4501f9084b82.jpeg&refer=http%3A%2F%2Fp1.wowodx.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632900497&t=81a842a4c84e492cfaab2847cf6e675c'
    ],

    links: [
      '/pages/main/main'
    ]
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
      swiperCurrent: e.currentTarget.id
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