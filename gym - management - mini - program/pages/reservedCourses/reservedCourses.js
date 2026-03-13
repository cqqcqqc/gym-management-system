Page({
  data: {
    reservedCourses: []
  },
  onLoad: function () {
    const reservedCourses = wx.getStorageSync('reservedCourses');
    this.setData({
      reservedCourses: reservedCourses
    });
  }
});