// client/pages/home/home.js

const qcloud = require('../../vendor/wafer2-client-sdk/index.js');
const config = require('../../config.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
    garbageResult: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.login({
      success: userInfo => {
        this.setData({
          userInfo: userInfo
        })
      },
      fail: error => {
        console.log(error);
      }
    })
  },
  
  // 点击登录函数
  onTapLogin: function (event) {
    if (event.detail.userInfo) {
      this.setData({
        userInfo: event.detail.userInfo
      })
      console.log(this.data.userInfo)
    }
  },

  onTapCard(){
    
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

  },

  onScanCode() {
    var self = this;
    wx.scanCode({
      success(res) {
        if (res.scanType == "QR_CODE") {
          console.log(res.result);
          self.getGarbage(res.result);

        }else
          console.log("你扫描的不是正确的二维码");
      }
    });
  },
  
  onTapTest(){
    wx.navigateTo({
      url: '/pages/test/test',
    })
  },

  onTapCard(){
    wx.navigateTo({
      url: '/pages/card/card',
    })
  },

  getGarbage(garbage,cb){
    wx.showLoading({
      title: '正在获取'
    });
    qcloud.request({
      url: config.service.getGarbageUrl+garbage,
      method: 'GET',
      success: result => {
        wx.hideLoading();
        this.setData({
          garbageResult:result.data.data[0]
        });
        wx.navigateTo({
          url: '/pages/garbage/garbage?id='+this.data.garbageResult.garbage_id,
        })
      },
      fail: error => {
        console.log(error);
        wx.hideLoading();
        wx.showToast({
          icon: 'none',
          title: '加载失败'
        });
      },
      complete: () => {
        // cb && cb()
      }
    })
  }
})