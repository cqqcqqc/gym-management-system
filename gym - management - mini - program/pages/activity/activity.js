Page({
  data: {
    activity: {
      image: "/assets/activity/activity.jpg",
      title: "健身活动推广",
      date: "2025年5月1日 - 2025年5月31日",
      intro: "本次健身活动推出多项优惠课程，欢迎大家报名参加！"
    }
  },
  onSignUp() {
    wx.showToast({
      title: "报名成功",
      icon: 'success',
      duration: 2000
    });
    // 这里可以添加实际的报名逻辑，调用接口提交报名信息
  }
})