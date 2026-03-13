Page({
  data: {
    memberList: [
      {
        id: 1,
        name: "张三",
        level: "普通会员",
        remainingTimes: 10
      },
      {
        id: 2,
        name: "李四",
        level: "高级会员",
        remainingTimes: 20
      }
    ],
    isShowModal: false,
    isEdit: false,
    tempMember: {
      id: null,
      name: '',
      level: '',
      remainingTimes: 0
    }
  },
  addMember() {
    this.setData({
      isShowModal: true,
      isEdit: false,
      tempMember: {
        id: null,
        name: '',
        level: '',
        remainingTimes: 0
      }
    });
  },
  editMember(e) {
    const id = e.currentTarget.dataset.id;
    const member = this.data.memberList.find(item => item.id === id);
    this.setData({
      isShowModal: true,
      isEdit: true,
      tempMember: { ...member }
    });
  },
  deleteMember(e) {
    const id = e.currentTarget.dataset.id;
    const newMemberList = this.data.memberList.filter(item => item.id !== id);
    this.setData({
      memberList: newMemberList
    });
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000
    });
  },
  handleInputChange(e) {
    const field = e.currentTarget.dataset.field;
    const value = e.detail.value;
    this.setData({
      tempMember: {
        ...this.data.tempMember,
        [field]: value
      }
    });
  },
  saveMember() {
    const { tempMember, isEdit, memberList } = this.data;
    if (!tempMember.name || !tempMember.level || tempMember.remainingTimes === 0) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (isEdit) {
      const newMemberList = memberList.map(item => {
        if (item.id === tempMember.id) {
          return tempMember;
        }
        return item;
      });
      this.setData({
        memberList: newMemberList
      });
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        duration: 2000
      });
    } else {
      const newId = memberList.length > 0 ? memberList[memberList.length - 1].id + 1 : 1;
      const newMember = { ...tempMember, id: newId };
      this.setData({
        memberList: [...memberList, newMember]
      });
      wx.showToast({
        title: '新增成功',
        icon: 'success',
        duration: 2000
      });
    }
    this.hideModal();
  },
  hideModal() {
    this.setData({
      isShowModal: false
    });
  }
})