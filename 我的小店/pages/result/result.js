const app = getApp()
var common = require('../../utils/common.js');
var util = require('../../utils/util')
var wxrequest = util.wxPromisify(wx.request)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur: 0,
    fID: "001",
    types: [
      
    ],
    typeTrees: [
    ],
    fName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getTrees(wx.getStorageSync("key"));

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
  getCur: function (e) {
    console.log(e.currentTarget.dataset.selectindex);
    this.setData({
      cur: e.currentTarget.dataset.selectindex
    });
    this.setData({
      fID: e.currentTarget.dataset.fid
    });
    this.getTrees(this.data.fID);
  },
  getTrees: function (fName) {
    this.data.typeTrees.splice(0, this.data.typeTrees.length);
    let allItems = wx.getStorageSync("allItems");
    for (let i = 0; i < allItems.length; i++) {
      if ((allItems[i].fName.value).indexOf(fName)>=0) {
        this.data.typeTrees.push(allItems[i]);
      }
    }
    this.setData({
      typeTrees: this.data.typeTrees
    });
  },
  goDetail: function (e) {
    console.log(e.currentTarget.dataset.index);
    //商品序号
    let i = e.currentTarget.dataset.index;
    //准备传递的商品（结构含有值）
    let item = {
      fName: {
        value: this.data.typeTrees[i].fName.value
      },
      fPrice: {
        value: this.data.typeTrees[i].fPrice.value
      },
      fSumNum: {
        value: this.data.typeTrees[i].fSumNum.value
      },
      fDescription: {
        value: this.data.typeTrees[i].fDescription.value
      },
      ownerID: {
        value: this.data.typeTrees[i].ownerID.value
      },
      storeFileName: {
        value: this.data.typeTrees[i].storeFileName.value
      },
      fID: {
        value: this.data.typeTrees[i].fID.value
      }
    };
    //将商品放置到缓存中
    wx.setStorageSync("newItem", item);
    //切换页面
    wx.navigateTo({
      url: '/pages/detail/detail',
    })


  }
})