// pages/first/first.js
Page({
  myevent1(e) {
    console.log(e, 888);
  },
  getUserInfoFn(e) {
    console.log(e, 111)
  },
  click(e) {
    let cc = e.currentTarget.dataset.cc
    switch (cc) {
      case '衣服':
        console.log('wo ai ni1')
        break
      case '裤子':
        console.log('wo ai ni2')
        break
      default:
        console.log('wo ai ni3')

    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    nowtime: '',
    list: [
      '衣服',
      '裤子',
      '鞋子'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let nowtime1 = new Date().getTime()
    console.log(nowtime1, 222);
    this.setData({
      nowtime: nowtime1
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