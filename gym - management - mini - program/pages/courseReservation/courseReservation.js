Page({
  data: {
    courses: [
      {
        imageUrl: "yoga.png",
        title: "瑜伽课程",
        desc: "适合初学者的瑜伽课程",
        duration: "60分钟/节",
        coach: "张教练（5年瑜伽授课经验）",
        reservationDate: "2025-04-22",
        reservationTime: "16:22"
      },
      {
        imageUrl: "aerobic.png",
        title: "有氧课程",
        desc: "基础有氧训练课程",
        duration: "50分钟/节",
        coach: "李教练（3年有氧授课经验）",
        reservationDate: "2025-04-22",
        reservationTime: "16:22"
      },
      {
        imageUrl: "strength.png",
        title: "力量训练课程",
        desc: "增强力量的训练课程",
        duration: "45分钟/节",
        coach: "王教练（4年力量训练授课经验）",
        reservationDate: "2025-04-22",
        reservationTime: "16:22"
      }
    ],
    minDate: "2025-04-01",
    maxDate: "2025-05-01"
  },
  functionName: function (index, type) {
    return function (e) {
      const key = type === 'date'? `courses[${index}].reservationDate` : `courses[${index}].reservationTime`;
      this.setData({
        [key]: e.detail.value
      });
    }.bind(this);
  },
  submitReservation: function (e) {
    const index = e.currentTarget.dataset.index;
    const { courses } = this.data;
    const { reservationDate, reservationTime } = courses[index];
    wx.showToast({
      title: '预约成功',
      icon:'success'
    });
    console.log('提交预约课程:', courses[index].title, '，日期：', reservationDate, '时间：', reservationTime);
  }
});