Page({
  data: {
    username: 'admin', // 开发默认填充测试账号
    password: '',
    passwordType: 'password', // 密码输入类型（password/text）
    passwordVisible: false, // 密码可见状态
    isLoading: false // 登录加载状态
  },

  // 用户名输入
  handleUsernameInput(e) {
    this.setData({ username: e.detail.value.trim() });
  },

  // 密码输入
  handlePasswordInput(e) {
    this.setData({ password: e.detail.value.trim() });
  },

  // 切换密码可见性
  togglePassword() {
    this.setData({
      passwordType: this.data.passwordType === 'password' ? 'text' : 'password',
      passwordVisible: !this.data.passwordVisible
    });
  },

  // 登录逻辑
  handleLogin() {
    const { username, password } = this.data;
    
    // 输入验证
    if (!username) {
      return wx.showToast({ title: '请输入用户名', icon: 'none' });
    }
    if (!password) {
      return wx.showToast({ title: '请输入密码', icon: 'none' });
    }

    this.setData({ isLoading: true }); // 禁用按钮，显示加载

    // 模拟登录请求（开发阶段，实际需替换为真实接口）
    wx.request({
      url: 'http://localhost:60624/api/login', // 匹配之前的服务器端口
      method: 'POST',
      data: { username, password },
      success: (res) => {
        if (res.data.code === 200) {
          wx.showToast({ title: '登录成功', icon: 'none' });
          
          // 跳转到 tabBar 首页（需确保 app.json 中首页是 tabBar 页面）
          wx.switchTab({
            url: '/pages/index/index',
            success: () => this.setData({ isLoading: false })
          });
        } else {
          wx.showToast({ title: res.data.msg || '登录失败', icon: 'none' });
          this.setData({ isLoading: false });
        }
      },
      fail: () => {
        wx.showToast({ title: '网络请求失败', icon: 'none' });
        this.setData({ isLoading: false });
      }
    });
  }
});