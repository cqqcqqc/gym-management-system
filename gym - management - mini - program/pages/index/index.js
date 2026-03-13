Page({
  data: {
    userInfo: {},
    hotCourses: [],
    todayExerciseDuration: 0,
    todayCaloriesBurned: 0,
    notifications: []
  },

  onLoad() {
    // 调用本地服务器接口（端口必须与服务器一致！）
    wx.request({
      url: 'http://localhost:60624/api/global-data',
      success: (res) => {
        console.log('\n🌈 服务器数据接收成功:', res.data);
        // 验证全局数据更新（app.js 中定义的 globalData）
        const app = getApp();
        console.log('小程序全局登录状态:', app.globalData.userLogin);

        // 这里可以根据服务器返回的数据更新页面数据
        // 假设服务器返回的数据中有与页面相关的数据，可进行相应处理
        // 目前这里先使用模拟数据，你可以根据实际情况修改
        this.setData({
          userInfo: {
            avatarUrl: "/assets/icon/user-avatar.png",
            nickName: "小明"
          },
          hotCourses: [
            { id: 1, title: "瑜伽入门", imageUrl: "/assets/course/yoga.jpg" },
            { id: 2, title: "力量训练", imageUrl: "/assets/course/strength.jpg" }
          ],
          todayExerciseDuration: 60,
          todayCaloriesBurned: 300,
          notifications: [
            { content: "新的课程已上线！", time: "2025-05-15 10:00" }
          ]
        });
      },
      fail: (err) => {
        console.error('\n🚨 连接失败，请检查：', err);
        wx.showToast({ title: "服务器未响应", icon: "none" });
      }
    });
  }
});