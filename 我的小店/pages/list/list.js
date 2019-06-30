// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1703/10/c11/39125469_1489113872948_mthumb.jpg',
      'http://tgi12.jia.com/119/679/19679746.jpg',
      'http://pic1.win4000.com/wallpaper/2/5604e66a60fb8.jpg',
      'http://abc.2008php.com/2013_Website_appreciate/2013-04-01/20130401123429.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 500,
    //商品集合（数组）
    items: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.request({
      url: 'https://www.myyd.xyz/baas/takeoutAdmin/cuisine/queryTakeout_food',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.rows);
       wx.setStorageSync("allItems", res.data.rows);
        that.setData({items: res.data.rows});
      }
    });

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  goDetail: function(e) {
    console.log(e.currentTarget.dataset.index);
    //商品序号
    let i = e.currentTarget.dataset.index;
    //准备传递的商品（结构含有值）
    let item = {
      fName: {
        value: this.data.items[i].fName.value
      },
      fPrice: {
        value: this.data.items[i].fPrice.value
      },
      fSumNum: {
        value: this.data.items[i].fSumNum.value
      },
      fDescription: {
        value: this.data.items[i].fDescription.value
      },
      ownerID: {
        value: this.data.items[i].ownerID.value
      },
      storeFileName: {
        value: this.data.items[i].storeFileName.value
      },
      fID: {
        value: this.data.items[i].fID.value
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