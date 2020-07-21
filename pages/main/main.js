/*Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],

    inputShowed: false,
    inputVal: "",
    i: 0
  },
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      if (this.data.i % 2 === 0) {
        setTimeout(() => {
          resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
        }, 200)
      } else {
        setTimeout(() => {
          resolve([])
        }, 200)

      }

      this.setData({
        i: this.data.i + 1
      })
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  
  },
})
*/

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],

    inputShowed: false,
    inputVal: ""


  },
  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },

  





});