// pages/fitnessData/fitnessData.js
Page({
  data: {
    // 模拟健身数据
    fitnessData: {
      totalWorkouts: 20, // 总锻炼次数
      totalDuration: 3600, // 总锻炼时长（分钟）
      totalCaloriesBurned: 5000, // 总消耗卡路里
      lastWorkoutDate: '2024-12-10', // 上次锻炼日期
      lastWorkoutType: '力量训练', // 上次锻炼类型
      lastWorkoutDuration: 60, // 上次锻炼时长（分钟）
      lastWorkoutCalories: 300 // 上次锻炼消耗卡路里
    }
  },

  onLoad() {
    console.log('健身数据页面加载');
  }
});