export const request = (options) => {

  wx.showLoading({
    title: '加载中',
  })
  return new Promise((resolve, reject) => {
    let baseUrl="https://api.zbztb.cn/api/public/v1"
    wx.request({
      ...options,
      url :baseUrl+options.url,
      success: (result) => {
        resolve(result.data.message)
        wx.hideLoading()
      },
      fail: (err) => {
        reject(err)
      }

    })

  })
}