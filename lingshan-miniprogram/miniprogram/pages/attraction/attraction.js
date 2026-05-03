// pages/attraction/attraction.js
const app = getApp();
const knowledge = require('../../utils/knowledge.js');

Page({
  data: {
    attractionId: '',
    attraction: {},
    relatedAttractions: [],
    galleryImages: [
      '/assets/images/attraction-1.jpg',
      '/assets/images/attraction-2.jpg',
      '/assets/images/attraction-3.jpg'
    ]
  },

  onLoad(options) {
    const id = options.id;
    this.setData({ attractionId: id });
    this.loadAttraction(id);
  },

  // 加载景点信息
  loadAttraction(id) {
    const attraction = knowledge.getAttraction(id);
    if (attraction) {
      // 获取相关景点
      const allAttractions = Object.values(knowledge.attractions);
      const related = allAttractions
        .filter(a => a.id !== id && a.tags.some(tag => attraction.tags.includes(tag)))
        .slice(0, 3);

      this.setData({
        attraction: attraction,
        relatedAttractions: related
      });
    } else {
      wx.showToast({ title: '景点不存在', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1500);
    }
  },

  // 返回上一页
  goBack() {
    wx.navigateBack();
  },

  // 跳转到相关景点
  goToRelated(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/attraction/attraction?id=${id}` });
  },

  // 分享景点
  shareAttraction() {
    wx.shareAppMessage({
      title: '灵山胜境 - ' + this.data.attraction.name,
      path: '/pages/attraction/attraction?id=' + this.data.attraction.id,
      imageUrl: this.data.attraction.image
    });
  },

  // 添加到已游览
  addToVisited() {
    const attraction = this.data.attraction;
    app.saveVisitedAttraction(attraction.id);
    wx.showToast({ title: '已添加至游览记录', icon: 'success' });
  }
});
