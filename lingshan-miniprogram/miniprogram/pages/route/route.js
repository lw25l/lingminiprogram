// pages/route/route.js
const knowledge = require('../../utils/knowledge.js');

Page({
  data: {
    selectedDuration: 'medium',
    selectedGroup: 'family',
    recommendedRoutes: [],
    interestOptions: [
      { id: 1, name: '佛教文化' },
      { id: 2, name: '历史人文' },
      { id: 3, name: '自然风光' },
      { id: 4, name: '建筑艺术' }
    ]
  },

  onLoad() {
    this.loadRecommendedRoutes();
  },

  // 加载推荐路线
  loadRecommendedRoutes() {
    // 使用预设路线数据
    const routes = knowledge.getPresetRoutes();
    this.setData({ recommendedRoutes: routes });
  },

  // 选择游览时长
  selectDuration(e) {
    const val = e.currentTarget.dataset.val;
    this.setData({ selectedDuration: val });
    this.filterRoutes();
  },

  // 选择出行人群
  selectGroup(e) {
    const val = e.currentTarget.dataset.val;
    this.setData({ selectedGroup: val });
    this.filterRoutes();
  },

  // 筛选路线
  filterRoutes() {
    const { selectedDuration, selectedGroup } = this.data;
    const routes = knowledge.getPresetRoutes();
    
    const filtered = routes.filter(r => {
      // 根据时长筛选
      if (selectedDuration === 'short' && r.duration !== '短(<3h)') return false;
      if (selectedDuration === 'medium' && !['中(3-5h)'].includes(r.duration)) return false;
      if (selectedDuration === 'long' && r.duration !== '长(>5h)') return false;
      
      // 根据人群筛选
      if (selectedGroup === 'family' && r.type !== '家庭亲子') return false;
      if (selectedGroup === 'couple' && r.type !== '情侣/朋友') return false;
      if (selectedGroup === 'solo' && r.type !== '独自旅行') return false;
      
      return true;
    });
    
    this.setData({ recommendedRoutes: filtered });
  },

  // 跳转到路线详情
  goToRouteDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/route/detail?id=${id}` });
  },

  // 开始游览
  startRoute(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '导航已开启', icon: 'success' });
  },

  // 保存路线
  saveRoute(e) {
    const id = e.currentTarget.dataset.id;
    wx.showToast({ title: '路线已保存', icon: 'success' });
  },

  // 切换Tab页
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    if (tab === 'index') {
      wx.switchTab({ url: '/pages/index/index' });
    } else if (tab === 'chat') {
      wx.switchTab({ url: '/pages/chat/chat' });
    } else if (tab === 'map') {
      wx.switchTab({ url: '/pages/map/map' });
    } else if (tab === 'profile') {
      wx.switchTab({ url: '/pages/profile/profile' });
    }
  }
});
