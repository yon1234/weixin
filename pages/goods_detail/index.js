// pages/goods_detail/index.js

import {
  request
} from '../../request/requst';

import regeneratorRuntime from '../../lib/runtime/runtime';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsDetail: []
  },

  queryData: {
    goods_id: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryData.goods_id = options.cid
    this.getgoodsDetail()
  },

  previewImg: function (e) {
    console.log(e);

    var currentUrl = e.currentTarget.dataset.currenturl
    var preview = e.currentTarget.dataset.previewurl
    var previewUrls = []
    preview.forEach(element => {
      previewUrls.push(element.pics_big)
    })

    wx.previewImage({
      current: currentUrl, //必须是http图片，本地图片无效
      urls: previewUrls, //必须是http图片，本地图片无效
    })
  },
  async getgoodsDetail() {

    let res = await request({
      url: '/goods/detail',
      data: this.queryData
    })

    console.log(res);

    this.setData({
      goodsDetail: res
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