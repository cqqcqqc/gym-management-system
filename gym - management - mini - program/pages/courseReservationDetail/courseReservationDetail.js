Page({
  data: {
      courseName: '',
      courseTime: '',
      coachName: ''
  },
  onLoad(options) {
      // 这里可以根据传递的参数初始化课程信息
      this.setData({
          courseName: options.courseName || '',
          courseTime: options.courseTime || '',
          coachName: options.coachName || ''
      });
  },
  handleReservation() {
      // 模拟预约逻辑
      wx.showToast({
          title: '预约成功',
          icon: 'success'
      });
  }
});