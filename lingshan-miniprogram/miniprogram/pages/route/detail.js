// pages/route/detail.js
const knowledge = require('../../utils/knowledge.js');

Page({
  data: {
    routeId: '',
    route: {},
    galleryImages: [
      '/assets/images/route-1.jpg',
      '/assets/images/route-2.jpg'
    ]
  },

  onLoad(options) {
    const id = options.id;
    this.setData({ routeId: id });
    this.loadRoute(id);
  },

  // 加载路线信息
  loadRoute(id) {
    const routes = knowledge.getPresetRoutes();
    const route = routes.find(r => r.id === id);
    if (route) {
      this.setData({ route });
    } else {
      wx.showToast({ title: '路线不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
    }
  },

  // 返回上一页
  goBack() {
    wx.navigateBack();
  },

  // 开始导航
  startNavigation(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '正在启动导航...', icon: 'success' });
  },

  // 分享路线
  shareRoute(e) {
    const id = e.currentTarget.dataset.id;
    wx.shareAppMessage({
      title: '灵山胜境 - ' + this.data.route.name,
      path: '/pages/route/detail?id=' + id,
      imageUrl: this.data.route.coverImage
    });
  }
});
