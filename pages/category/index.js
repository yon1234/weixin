// pages/category/index.js

import {
  request
} from '../../request/requst.js'
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */

  data: {
    categoryList: [],
    goodData: [],
    currentIndexNav: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCategoryData()
  },
  async getCategoryData() {
    let res = await request({
      url: "/categories"
    })
    console.log(res);
    let goodList = res.map(v => {
      return v.cat_name
    })
    let goodData = res[0].children
    console.log(goodData);
    this.setData({
      categoryList: res,
      goodData
    })
  },


  activeNav(e) {
    console.log(e);
    this.setData({
      goodData:this.data.categoryList[e.target.dataset.index].children,
      currentIndexNav: e.target.dataset.index
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