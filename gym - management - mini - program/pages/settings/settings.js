Page({
  data: {
    // 可以在这里初始化表单数据
    nickname: '',
    phone: '',
    email: '',
    password: ''
  },
  submitForm(e) {
    const formData = e.detail.value;
    console.log('提交的表单数据：', formData);
    // 这里可以添加实际的保存逻辑，比如发送请求到服务器
    wx.showToast({
      title: '设置保存成功',
      icon: 'success',
      duration: 2000
    });
  }
})