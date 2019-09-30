// client/pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ganGarbages: [
      {
        id: 1,
        garbage_id: 'peachpit',
        category: '干垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/peachpit.png'
      }, {
        id: 2,
        garbage_id: 'scrapbasketball',
        category: '干垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/scrapbasketball.png'
      }, {
        id: 3,
        garbage_id: 'shell',
        category: '干垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/shell.png'
      }, {
        id: 4,
        garbage_id: 'sponge',
        category: '干垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/sponge.png'
      }, {
        id: 5,
        garbage_id: 'toiletpaper',
        category: '干垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/toiletpaper.png'
      },{
        id: 56,
        garbage_id: 'plate',
        category: '干垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/plate.png'
      }
    ],
    huiGarbages:[
      {
        id: 6,
        garbage_id: 'cans',
        category: '可回收垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/cans.png'
      }, {
        id: 7,
        garbage_id: 'carton',
        category: '可回收垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/carton.png'
      }, {
        id: 8,
        garbage_id: 'glassbottles',
        category: '可回收垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/glassbottles.png'
      }, {
        id: 9,
        garbage_id: 'newspaper',
        category: '可回收垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/newspaper.png'
      }, {
        id: 10,
        garbage_id: 'olddoll',
        category: '可回收垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/olddoll.png'
      }, {
        id: 11,
        garbage_id: 'plasticbottles',
        category: '可回收垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/plasticbottles.png'
      }
    ],
    shiGarbages:[
      {
        id: 12,
        garbage_id: 'banana',
        category: '湿垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/bananapeel.png'
      }, {
        id: 13,
        garbage_id: 'biscuit',
        category: '湿垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/biscuit.png'
      },
      {
        id: 14,
        garbage_id: 'eggshell',
        category: '湿垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/eggshell.png'
      },
      {
        id: 15,
        garbage_id: 'fishbone',
        category: '湿垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/fishbone.png'
      },
      {
        id: 16,
        garbage_id: 'ketchup',
        category: '湿垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/ketchup.png'
      },
      {
        id: 17,
        garbage_id: 'vegetableleaf',
        category: '湿垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/vegetableleaf.png'
      }
    ],
    haiGarbages:[
      {
        id: 18,
        garbage_id: 'battery',
        category: '有害垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/battery.png'
      }, {
        id: 19,
        garbage_id: 'expiredcapsules',
        category: '有害垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/expiredcapsules.png'
      }, {
        id: 20,
        garbage_id: 'paintbucket',
        category: '有害垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/paintbucket.png'
      }, {
        id: 21,
        garbage_id: 'perfumebottle',
        category: '有害垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/perfumebottle.png'
      }, {
        id: 22,
        garbage_id: 'thermometer',
        category: '有害垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/thermometer.png'
      }, {
        id: 23,
        garbage_id: 'watercolorpen',
        category: '有害垃圾',
        image: 'https://garbage-1257864644.cos.ap-shanghai.myqcloud.com/watercolorpen.png'
      }
    ]
  },
  onDetail:function(event){
    console.log(event.target.id)
    wx.navigateTo({
      url: '/pages/garbage/garbage?id=' + event.target.id,
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