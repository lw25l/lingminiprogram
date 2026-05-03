// app.js
App({
  globalData: {
    userInfo: null,
    userId: null,
    apiBaseUrl: 'https://api.lingshan-guide.com/api',
    // 开发环境使用本地地址
    // apiBaseUrl: 'http://localhost:3000/api',
    selectedInterests: [],
    chatHistory: [],
    visitedAttractions: []
  },

  onLaunch() {
    // 初始化
    this.initUser();
    this.checkUpdate();
  },

  // 初始化用户信息
  initUser() {
    const userId = wx.getStorageSync('userId') || this.generateUserId();
    const userInfo = wx.getStorageSync('userInfo');
    const selectedInterests = wx.getStorageSync('selectedInterests') || [];
    const visitedAttractions = wx.getStorageSync('visitedAttractions') || [];

    this.globalData.userId = userId;
    this.globalData.userInfo = userInfo;
    this.globalData.selectedInterests = selectedInterests;
    this.globalData.visitedAttractions = visitedAttractions;

    wx.setStorageSync('userId', userId);
  },

  // 生成用户ID
  generateUserId() {
    return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  },

  // 检查小程序更新
  checkUpdate() {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: (res) => {
                if (res.confirm) {
                  updateManager.applyUpdate();
                }
              }
            });
          });
        }
      });
    }
  },

  // 保存用户兴趣
  saveInterests(interests) {
    this.globalData.selectedInterests = interests;
    wx.setStorageSync('selectedInterests', interests);
  },

  // 保存访问记录
  saveVisitedAttraction(attractionId) {
    const visited = this.globalData.visitedAttractions;
    if (!visited.includes(attractionId)) {
      visited.push(attractionId);
      this.globalData.visitedAttractions = visited;
      wx.setStorageSync('visitedAttractions', visited);
    }
  },

  // 添加聊天记录
  addChatHistory(message) {
    this.globalData.chatHistory.push(message);
    // 只保留最近100条
    if (this.globalData.chatHistory.length > 100) {
      this.globalData.chatHistory = this.globalData.chatHistory.slice(-100);
    }
  },

  // 清空聊天记录
  clearChatHistory() {
    this.globalData.chatHistory = [];
    wx.removeStorageSync('chatHistory');
  }
});
