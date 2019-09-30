// client/pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionNum:['第一题','第二题','第三题','第四题','第五题'],
    questions: [
      { id: 1, garbage_id: 'peachpit', question: '下面哪种垃圾是干垃圾？', option1: '塑料袋', option2: '桃核', option3: '易拉罐', option4: '旧报纸', trueoption: '1' }, 
      { id: 2, garbage_id: 'thermometer', question: '旧温度计属于什么垃圾？', option1: '可回收垃圾', option2: '干垃圾', option3: '湿垃圾', option4: '有害垃圾', trueoption: '4' }, 
      { id: 3, garbage_id: 'olddoll', question: '下面哪种垃圾属于可回收垃圾？', option1: '砖块', option2: '香水瓶', option3: '旧玩偶', option4: '蟹壳', trueoption: '3' }, 
      { id: 4, garbage_id: 'plate', question: '下面哪种垃圾不属于有害垃圾？', option1: '盘子', option2: '香水瓶', option3: '油漆桶', option4: '注射器', trueoption: '1' }, 
      { id: 5, garbage_id: 'sponge', question: '海绵属于什么垃圾？', option1: '可回收垃圾', option2: '干垃圾', option3: '湿垃圾', option4: '有害垃圾', trueoption: '2'}
    ],
    nowQuestion:0,
  },

  onOption: function(event){
    if (event.target.id == this.data.questions[this.data.nowQuestion].trueoption){
      let nowQuestion=this.data.nowQuestion;
      this.setData({
        nowQuestion:nowQuestion+1
      });
    } else if (event.target.id != this.data.questions[this.data.nowQuestion].trueoption){
      wx.showModal({
        title: '答错啦！',
        content: '请重新选择正确的答案哟',
      })
    }
  },

  onBackHome(){
    wx.navigateBack({
      delta:20,
    });
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