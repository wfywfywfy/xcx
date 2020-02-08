// components/my-second/my-second.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cc: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handlebt(e) {
      console.log(e.currentTarget.dataset.number, 999);
      this.setData({
        cc: e.currentTarget.dataset.number
      })
      this.triggerEvent('myevent', {
        index: e.currentTarget.dataset.number,
        title: this.data.list[e.currentTarget.dataset.number]
      }, {})
    }
  }
})