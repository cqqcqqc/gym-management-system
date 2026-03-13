// app.js
App({
  // 全局数据（可在任意页面通过 getApp().globalData 访问）
  globalData: {
    userLogin: false, // 登录状态
    themeColor: "#1AAD19" // 主题色
  },

  // 模拟错误信息上报函数
  reportError(errorMsg) {
    // 这里可以替换为实际的接口调用，将错误信息发送到服务器
    console.log(`上报错误信息: ${errorMsg}`);
  },

  // 模拟验证用户信息有效性的函数
  validateUserInfo(userInfo) {
    // 这里可以添加更复杂的验证逻辑，例如检查用户信息中的字段是否合法
    if (userInfo && userInfo.id && userInfo.name) {
      return true;
    }
    return false;
  },

  // 小程序初始化（仅执行一次）
  onLaunch() {
    console.log('[小程序初始化] 开始检查登录状态');
    // 检查登录状态（示例）
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      if (this.validateUserInfo(userInfo)) {
        this.globalData.userLogin = true;
        console.log('[小程序初始化] 用户已登录，信息有效');
      } else {
        console.log('[小程序初始化] 用户信息无效，视为未登录');
        wx.removeStorageSync('userInfo');
      }
    } else {
      console.log('[小程序初始化] 用户未登录');
    }

    // 清除历史缓存（解决 aboutblank 关键）
    console.log('[小程序初始化] 开始清除历史缓存');
    try {
      wx.clearStorageSync();
      console.log('[小程序初始化] 历史缓存清除完成');
    } catch (e) {
      console.error('[小程序初始化] 清除缓存失败:', e);
      this.reportError(`清除缓存失败: ${e.message}`);
    }
  },

  // 小程序显示（每次切回前台）
  onShow(options) {
    console.log(`[小程序启动] 来源：${options.scene}`);
  },

  // 错误监听（捕获 aboutblank 根源）
  onError(msg) {
    console.error(`[致命错误] ${msg}`);
    this.reportError(msg);
    wx.showToast({ title: "页面加载失败，请重试", icon: "none" });
  }
});