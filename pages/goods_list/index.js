// pages/goods_list/index.js

import {
  request
} from '../../request/requst.js'

import regeneratorRuntime from '../../lib/runtime/runtime';



Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: ["综合", "销量", "价格"],
    GoodsData: [],
    index: 0
  },
  queryData: {
    cid: "",
    pagenum: 1,
    pagesize: 10,
  },

  tatalPage: 1,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    console.log(this.queryData.pagenum);
    this.queryData.cid = options.cid
    this.getGoodsData()
    console.log(this.data.GoodsData);
  },
  change(e) {
    console.log(e);
    this.data.GoodsData = []
    this.queryData.pagenum = 1
    this.setData({
      index: e.detail.currentTarget.dataset.index
    })
    this.getGoodsData()
  },
  //获取数据
  async getGoodsData() {
    let res = await request({
      url: '/goods/search',
      data: this.queryData
    })

    console.log(res);
    this.tatalPage = Math.ceil(res.total / this.queryData.pagesize)
    console.log(this.tatalPage);
    if (this.data.index == 0) {
      this.setData({
        GoodsData: [...this.data.GoodsData, ...res.goods]
      })
    } else if (this.data.index == 1) {
      this.setData({
        GoodsData: [...this.data.GoodsData, ...res.goods].sort((a, b) => a.goods_price - b.goods_id)
      })
    } else {
      this.setData({
        GoodsData: [...this.data.GoodsData, ...res.goods].sort((a, b) => a.goods_price - b.goods_price)
      })
    }

    console.log(this.data.GoodsData);

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
    this.data.GoodsData = []
    this.queryData.pagenum = 1
    this.getGoodsData()

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (this.queryData.pagenum == this.tatalPage) {
      wx.showToast({
        title: '没有更多的数据',
        icon: 'success',
        duration: 2000
      })
    } else {
      this.queryData.pagenum++
      this.getGoodsData()
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {



  }
})