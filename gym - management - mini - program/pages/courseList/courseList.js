// pages/courseList/courseList.js
Page({
  data: {
      courseList: [
          {
              id: 1,
              title: "瑜伽课程",
              description: "",
              imageUrl: "/assets/course/course1.png",
              style: ''
          },
          {
              id: 2,
              title: "健身操课程",
              description: "",
              imageUrl: "/assets/course/course2.png",
              style: ''
          },
          {
              id: 3,
              title: "力量训练课程",
              description: "",
              imageUrl: "/assets/course/course3.png",
              style: ''
          },
          {
              id: 4,
              title: "动感单车课程",
              description: "充满激情的动感单车课程，让你尽情挥洒汗水",
              imageUrl: "/assets/course/course4.png",
              style: ''
          }
      ]
  },
  onLoad() {
      const courseList = this.data.courseList;
      if (courseList.length > 0) {
          courseList[courseList.length - 1].style = 'margin-bottom: 0';
      }
      this.setData({ courseList });
      console.log("课程列表数据：", this.data.courseList);
  },
  goToCourseDetail(e) {
      const courseId = e.currentTarget.dataset.id;
      const url = `/pages/courseDetail/courseDetail?id=${encodeURIComponent(courseId)}`;
      console.log('跳转的 URL:', url);
      wx.navigateTo({
          url,
          success() {
              console.log('成功跳转到课程详情页');
          },
          fail(err) {
              console.error('跳转课程详情页失败:', err);
          }
      });
  },
  onPullDownRefresh() {
      // 模拟刷新（清空数据后重新加载）
      this.setData({ courseList: [] });
      // 调用接口重新获取数据...
      wx.stopPullDownRefresh();
  },
  onReachBottom() {
      // 这里不添加新的课程，因为已经有四个课程了
      return;
  },
  imageError(e) {
      const index = e.currentTarget.dataset.index;
      const courseList = this.data.courseList;
      courseList[index].imageUrl = '/assets/default_image.png'; // 请替换为实际的默认图片路径
      this.setData({ courseList });
  }
});