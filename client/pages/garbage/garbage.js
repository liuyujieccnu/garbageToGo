// client/pages/garbage/garbage.js

const qcloud = require('../../vendor/wafer2-client-sdk/index.js');
const config = require('../../config.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    garbageResult:'',
    pages:6,
    images: [],
    descriptions:[],
    flag:0
  },

  onPrePage(){
    if(this.data.flag>0){
      let nowflag = this.data.flag - 1;
      this.setData({
        flag: nowflag
      });
    }    
  },

  onNextPage() {
    if (this.data.flag < this.data.pages){
      let nowflag = this.data.flag + 1;
      this.setData({
        flag: nowflag
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let garbageId = options.id;
    this.getGarbage(garbageId);
  },

  getGarbage(garbage, cb) {
    wx.showLoading({
      title: '正在获取'
    });
    qcloud.request({
      url: config.service.getGarbageUrl + garbage,
      method: 'GET',
      success: result => {
        wx.hideLoading();
        console.log(result);
        this.setData({
          garbageResult: result.data.data[0]
        });
        console.log(this.data.garbageResult);
        let images = new Array(this.data.garbageResult.image,this.data.garbageResult.image1, this.data.garbageResult.image2, this.data.garbageResult.image3, this.data.garbageResult.image4, this.data.garbageResult.image5, this.data.garbageResult.image6);
        let descriptions = new Array(this.data.garbageResult.introduction, this.data.garbageResult.description1, this.data.garbageResult.description2, this.data.garbageResult.description3, this.data.garbageResult.description4, this.data.garbageResult.description5, this.data.garbageResult.description6);
        // let nowImages = new Array();
        // let nowDescriptions = new Array();
        for(let i=0;i<7;i++){
          if (images[i]===''){
            this.setData({
              pages:i-1
            });
            break;
          }
          // else{
          //   nowImages.push(images[i]);
          //   nowDescriptions.push(descriptions[i]);
          // }
        }
        this.setData({
          images:images,
          descriptions:descriptions
        });
        console.log(this.data.pages);
        cb && cb();
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