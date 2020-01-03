import {
  request
} from '../../request/requst.js'

import regeneratorRuntime from '../../lib/runtime/runtime';

wx - Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    navList: [],
    commodity:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperData()
    this.getNavData()
    this.getCommodityData()
  },

  async  getSwiperData() {
 let res= await  request({
      url: '/home/swiperdata'
    })
    // .then(res => {
    //   console.log(res)
    //   this.setData({
    //     swiperList: res
    //    })
    // })

    this.setData({
          swiperList: res
      })

    // wx.request({
    //   url: '',
    //   success:(res)=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })

    //   }
    // })

  },


  async getNavData(){
  let res= await  request({
      url: '/home/catitems'
    })

      this.setData({
        navList: res
      })
    
  },

  async getCommodityData(){
 let res= await   request({
      url: '/home/floordata'
    })
      this.setData({
        commodity: res
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