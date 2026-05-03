// pages/profile/profile.js
const app = getApp();

Page({
  data: {
    loggedIn: false,
    userInfo: null,
    visitCount: 0,
    chatCount: 0,
    satisfactionScore: '4.8',
    showLogoutModal: false
  },

  onLoad() {
    this.checkLogin();
  },

  onShow() {
    this.loadUserData();
  },

  // 检查登录状态
  checkLogin() {
    const userInfo = app.globalData.userInfo;
    if (userInfo) {
      this.setData({
        loggedIn: true,
        userInfo: userInfo
      });
    }
  },

  // 加载用户数据
  loadUserData() {
    const visitedAttractions = app.globalData.visitedAttractions || [];
    this.setData({
      visitCount: visitedAttractions.length
    });
  },

  // 跳转登录
  goToLogin() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        const userInfo = res.userInfo;
        app.globalData.userInfo = userInfo;
        wx.setStorageSync('userInfo', userInfo);
        
        this.setData({
          loggedIn: true,
          userInfo: userInfo
        });
        
        wx.showToast({ title: '登录成功', icon: 'success' });
      },
      fail: () => {
        wx.showToast({ title: '登录取消', icon: 'none' });
      }
    });
  },

  // 编辑个人资料
  editProfile() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  // 跳转到我的路线
  goToRoute() {
    wx.navigateTo({ url: '/pages/route/route' });
  },

  // 跳转到游览记录
  goToVisited() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  // 跳转到意见反馈
  goToFeedback() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  // 跳转到设置
  goToSettings() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  // 显示统计详情
  showVisitCount() {
    wx.showToast({ title: `已游览${this.data.visitCount}个景点`, icon: 'none' });
  },

  showChatHistory() {
    wx.showToast({ title: `对话${this.data.chatCount}次`, icon: 'none' });
  },

  showSatisfaction() {
    wx.showToast({ title: `满意度${this.data.satisfactionScore}分`, icon: 'none' });
  },

  // 退出登录
  showLogoutModal() {
    this.setData({ showLogoutModal: true });
  },

  hideLogoutModal() {
    this.setData({ showLogoutModal: false });
  },

  stopPropagation() {
    // 阻止冒泡
  },

  doLogout() {
    app.globalData.userInfo = null;
    wx.removeStorageSync('userInfo');
    
    this.setData({
      loggedIn: false,
      userInfo: null,
      showLogoutModal: false
    });
    
    wx.showToast({ title: '已退出登录', icon: 'success' });
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '灵山胜境AI智能导览',
      path: '/pages/index/index',
      imageUrl: '/assets/images/share.jpg'
    };
  }
});
