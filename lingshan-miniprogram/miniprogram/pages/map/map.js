// pages/map/map.js
const app = getApp();
const api = require('../../utils/api.js');
const knowledge = require('../../utils/knowledge.js');

Page({
  data: {
    searchKeyword: '',
    currentFilter: 'all',
    filteredAttractions: [],
    mapLongitude: 120.35,
    mapLatitude: 31.48,
    scale: 16,
    markers: [],
    polylines: [],
    userLocation: {
      latitude: 31.48,
      longitude: 120.35,
      name: '我的位置'
    },
    loading: false,
    hasMore: true,
    page: 'map'
  },

  onLoad() {
    this.loadAttractions();
    this.initMap();
  },

  // 加载景点列表
  loadAttractions() {
    this.setData({ loading: true });
    
    // 模拟API调用
    setTimeout(() => {
      const allAttractions = Object.values(knowledge.attractions);
      const filtered = this.filterByTag(allAttractions);
      
      this.setData({
        filteredAttractions: filtered,
        markers: this.generateMarkers(filtered),
        loading: false,
        hasMore: true
      });
    }, 500);
  },

  // 根据标签筛选
  filterByTag(attractions) {
    const tag = this.data.currentFilter;
    if (tag === 'all') return attractions;
    return attractions.filter(a => a.tags && a.tags.includes(tag));
  },

  // 设置筛选
  setFilter(e) {
    const filter = e.currentTarget.dataset.filter;
    this.setData({ currentFilter: filter, filteredAttractions: [], hasMore: true });
    this.loadAttractions();
  },

  // 搜索输入
  onSearchInput(e) {
    this.setData({ searchKeyword: e.detail.value });
  },

  // 跳转到景点详情
  goToAttraction(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/attraction/attraction?id=${id}` });
  },

  // 初始化地图
  initMap() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        console.log('用户位置:', res);
      }
    });
  },

  // 定位用户
  locateUser() {
    wx.openLocation({
      latitude: this.data.userLocation.latitude,
      longitude: this.data.userLocation.longitude,
      name: '我的位置',
      address: '灵山胜境景区'
    });
  },

  // 区域变化
  onRegionChange(e) {
    console.log('区域变化:', e);
  },

  // 放大
  zoomIn() {
    this.setData({ scale: Math.min(this.data.scale + 2, 20) });
  },

  // 缩小
  zoomOut() {
    this.setData({ scale: Math.max(this.data.scale - 2, 12) });
  },

  // 生成标记点
  generateMarkers(attractions) {
    return attractions.map(attraction => ({
      id: attraction.id,
      latitude: 31.47 + Math.random() * 0.02,
      longitude: 120.34 + Math.random() * 0.02,
      width: 40,
      height: 40,
      iconPath: '/assets/images/marker.png',
      callout: {
        content: attraction.name,
        color: '#fff',
        fontSize: 14,
        borderRadius: 4,
        backgroundColor: 'rgba(74, 144, 217, 0.9)'
      }
    }));
  },

  // 获取距离（模拟）
  getDistance(location) {
    // 这里应该根据实际位置计算距离
    return '约3km';
  },

  // 切换Tab页
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    if (tab === 'index') {
      wx.switchTab({ url: '/pages/index/index' });
    } else if (tab === 'chat') {
      wx.switchTab({ url: '/pages/chat/chat' });
    } else if (tab === 'profile') {
      wx.switchTab({ url: '/pages/profile/profile' });
    }
  }
});
