// pages/page/page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"nameData",
    students: [
      {name:"name1",age:11},
      {name:"name2",age:12}
    ],
    counter: 0
  },

  handleBtnClick() {
    console.log('按钮发生了点击');
  //  this.data.counter +=1;
    this.setData({
      counter:this.data.counter += 1
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