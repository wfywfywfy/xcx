//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
  
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    let scene=wx.getLaunchOptionsSync()
    // console.log(wx.getLaunchOptionsSync().scene, 11)
    // console.log(options,11)
    switch (scene.scene) {
  case 1001:
   console.log(11)
   let aa = 1
    console.log(aa);
   break;
      default:
        console.log(11)
}
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  //app实例的全局数据
  globalData: {         
    userInfo: null
  }
})
