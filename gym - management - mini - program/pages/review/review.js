Page({
  data: {
    courseName: "",
    reviewContent: "",
    ratingRange: [1, 2, 3, 4, 5],
    ratingIndex: 0,
    reviewList: [
      {
        id: 1,
        courseName: "健身课程",
        reviewContent: "课程很有趣，教练很专业。",
        rating: 4
      },
      {
        id: 2,
        courseName: "瑜伽课程",
        reviewContent: "环境不错，体验很好。",
        rating: 5
      }
    ]
  },
  onRatingChange(e) {
    this.setData({
      ratingIndex: e.detail.value
    });
  },
  onSubmitReview(e) {
    const { courseName, reviewContent } = e.detail.value;
    const rating = this.data.ratingRange[this.data.ratingIndex];
    const newReview = {
      id: this.data.reviewList.length + 1,
      courseName,
      reviewContent,
      rating
    };
    const newReviewList = [...this.data.reviewList, newReview];
    this.setData({
      reviewList: newReviewList,
      courseName: "",
      reviewContent: "",
      ratingIndex: 0
    });
    wx.showToast({
      title: "评价提交成功",
      icon: 'success',
      duration: 2000
    });
  }
})