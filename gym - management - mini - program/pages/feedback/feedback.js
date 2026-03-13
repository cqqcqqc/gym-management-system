// pages/feedback/feedback.js
Page({
  data: {
      feedbackContent: '', // 用户输入的反馈内容
      contactInfo: '', // 用户输入的联系方式
      isSubmitting: false // 提交按钮的加载状态
  },

  // 反馈内容输入事件
  handleFeedbackInput(e) {
      this.setData({
          feedbackContent: e.detail.value
      });
  },

  // 联系方式输入事件
  handleContactInput(e) {
      this.setData({
          contactInfo: e.detail.value
      });
  },

  // 提交反馈
  submitFeedback() {
      const { feedbackContent, contactInfo } = this.data;
      if (!feedbackContent) {
          wx.showToast({
              title: '请输入反馈内容',
              icon: 'none'
          });
          return;
      }
      this.setData({ isSubmitting: true });

      // 模拟提交反馈到服务器
      setTimeout(() => {
          wx.showToast({
              title: '反馈提交成功',
              icon: 'success'
          });
          this.setData({
              feedbackContent: '',
              contactInfo: '',
              isSubmitting: false
          });
      }, 1500);
  }
});