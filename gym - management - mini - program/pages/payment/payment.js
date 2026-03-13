Page({
  data: {
    courseName: "健身课程",
    paymentAmount: 200,
    paymentMethod: "wechat"
  },
  onPaymentMethodChange(e) {
    this.setData({
      paymentMethod: e.detail.value
    });
  },
  onPay() {
    wx.showToast({
      title: `使用 ${this.data.paymentMethod} 支付成功`,
      icon: 'success',
      duration: 2000
    });
    // 这里可以添加实际的支付逻辑，调用支付 API
  }
})