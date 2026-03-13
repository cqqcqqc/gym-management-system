// pages/courseDetail/courseDetail.js
Page({
  data: {
      course: {}
  },
  onLoad(options) {
      console.log('课程详情页 onLoad 接收到的参数:', options);
      const courseId = options.id;
      if (!courseId) {
          console.error('未接收到有效的课程 ID');
          return;
      }
      // 模拟课程数据（实际需从服务器获取，添加 duration 和 coach 字段）
      const courses = [
          { 
              id: 1, 
              imageUrl: '/assets/course/yoga.png', 
              title: '瑜伽课程', 
              desc: '适合初学者的瑜伽课程',
              duration: '60分钟/节', 
              coach: '张教练（5年瑜伽授课经验）' 
          },
          { 
              id: 2, 
              imageUrl: '/assets/course/aerobics.png', 
              title: '健身操课程', 
              desc: '充满活力的健身操课程',
              duration: '45分钟/节',
              coach: '王教练（专业健身操导师）'
          },
          { 
              id: 3, 
              imageUrl: '/assets/course/power-training.png', 
              title: '力量训练课程', 
              desc: '通过多种器械和训练方式，有效提升肌肉力量和耐力的课程',
              duration: '90分钟/节',
              coach: '李教练（10年力量训练教学经验）'
          },
          { 
              id: 4, 
              imageUrl: '/assets/course/course4.png', 
              title: '动感单车课程', 
              desc: '充满激情的动感单车课程，让你尽情挥洒汗水',
              duration: '75分钟/节',
              coach: '赵教练（8年动感单车教学经验）'
          }
      ];
      const foundCourse = courses.find(c => c.id === Number(courseId));
      if (!foundCourse) {
          console.error(`未找到 ID 为 ${courseId} 的课程`);
          return;
      }
      this.setData({ course: foundCourse });
      console.log('课程详情页加载的课程数据:', this.data.course);
  },
  onShow() {
      console.log('课程详情页 onShow');
  }
});