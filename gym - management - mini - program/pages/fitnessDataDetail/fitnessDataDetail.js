Page({
  data: {
      weight: 0,
      bodyFatRate: 0,
      exerciseTime: 0
  },
  onLoad(options) {
      // 这里可以根据传递的参数初始化健身数据
      this.setData({
          weight: options.weight || 0,
          bodyFatRate: options.bodyFatRate || 0,
          exerciseTime: options.exerciseTime || 0
      });
  }
});