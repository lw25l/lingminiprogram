// pages/index/index.js
const app = getApp();

Page({
  data: {
    banners: [
      { id: 1, image: '/assets/images/banner1.jpg', title: '灵山大佛', link: '/pages/attraction/attraction?id=LS-006' },
      { id: 2, image: '/assets/images/banner2.jpg', title: '灵山梵宫', link: '/pages/attraction/attraction?id=LS-007' },
      { id: 3, image: '/assets/images/banner3.jpg', title: '九龙灌浴', link: '/pages/attraction/attraction?id=LS-008' }
    ],
    interestOptions: [
      { id: 1, name: '佛教文化', selected: false },
      { id: 2, name: '历史人文', selected: false },
      { id: 3, name: '自然风光', selected: false },
      { id: 4, name: '建筑艺术', selected: false },
      { id: 5, name: '祈福许愿', selected: false },
      { id: 6, name: '亲子游玩', selected: false }
    ],
    selectedInterestCount: 0,
    hasSelectedInterests: false,
    recommendAttractions: [],
    hotAttractions: [
      { id: 'LS-006', name: '灵山大佛', image: '/assets/images/buddha.jpg', visitCount: 12856 },
      { id: 'LS-007', name: '灵山梵宫', image: '/assets/images/palace.jpg', visitCount: 10234 },
      { id: 'LS-008', name: '九龙灌浴', image: '/assets/images/fountain.jpg', visitCount: 9567 },
      { id: 'LS-009', name: '五印坛城', image: '/assets/images/tancheng.jpg', visitCount: 7890 },
      { id: 'LS-005', name: '菩提大道', image: '/assets/images/bodhi.jpg', visitCount: 6789 }
    ],
    todayActivities: [
      { id: 1, time: '10:35', name: '《吉祥颂》演出', location: '灵山梵宫圣坛' },
      { id: 2, time: '11:30', name: '九龙灌浴表演', location: '九龙灌浴广场' },
      { id: 3, time: '14:00', name: '《吉祥颂》演出', location: '灵山梵宫圣坛' },
      { id: 4, time: '15:30', name: '九龙灌浴表演', location: '九龙灌浴广场' }
    ]
  },

  onLoad() {
    this.checkInterests();
    this.loadRecommendations();
  },

  onShow() {
    // 刷新数据
  },

  // 检查是否已选择兴趣
  checkInterests() {
    const selectedInterests = app.globalData.selectedInterests || [];
    if (selectedInterests.length > 0) {
      this.setData({ hasSelectedInterests: true });
      this.updateInterestTags(selectedInterests);
    }
  },

  // 更新兴趣标签状态
  updateInterestTags(selectedInterests) {
    const interestOptions = this.data.interestOptions.map(item => ({
      ...item,
      selected: selectedInterests.includes(item.name)
    }));
    this.setData({ 
      interestOptions,
      selectedInterestCount: selectedInterests.length 
    });
  },

  // 切换兴趣选择
  toggleInterest(e) {
    const index = e.currentTarget.dataset.index;
    const interestOptions = this.data.interestOptions;
    interestOptions[index].selected = !interestOptions[index].selected;
    
    const selectedInterestCount = interestOptions.filter(i => i.selected).length;
    this.setData({ interestOptions, selectedInterestCount });
  },

  // 确认兴趣选择
  confirmInterests() {
    const selectedInterests = this.data.interestOptions
      .filter(i => i.selected)
      .map(i => i.name);
    
    app.saveInterests(selectedInterests);
    this.setData({ hasSelectedInterests: true });
    this.loadRecommendations();
    
    wx.showToast({
      title: '设置成功',
      icon: 'success'
    });
  },

  // 加载推荐景点
  loadRecommendations() {
    const interests = app.globalData.selectedInterests || [];
    
    // 根据兴趣推荐景点（模拟数据）
    let recommendations = [];
    
    if (interests.includes('佛教文化')) {
      recommendations.push(
        { id: 'LS-006', name: '灵山大佛', image: '/assets/images/buddha.jpg', highlight: '世界最高露天青铜释迦牟尼立像', tags: ['佛教文化', '祈福'] },
        { id: 'LS-009', name: '五印坛城', image: '/assets/images/tancheng.jpg', highlight: '藏传佛教文化瑰宝', tags: ['佛教文化', '建筑艺术'] }
      );
    }
    
    if (interests.includes('历史人文')) {
      recommendations.push(
        { id: 'LS-007', name: '灵山梵宫', image: '/assets/images/palace.jpg', highlight: '佛教艺术的卢浮宫', tags: ['历史人文', '建筑艺术'] },
        { id: 'LS-001', name: '灵山大照壁', image: '/assets/images/wall.jpg', highlight: '华夏第一壁', tags: ['历史人文'] }
      );
    }
    
    if (interests.includes('自然风光')) {
      recommendations.push(
        { id: 'LS-005', name: '菩提大道', image: '/assets/images/bodhi.jpg', highlight: '禅意清幽的朝圣步道', tags: ['自然风光', '佛教文化'] }
      );
    }
    
    if (interests.includes('祈福许愿')) {
      recommendations.push(
        { id: 'LS-006', name: '灵山大佛', image: '/assets/images/buddha.jpg', highlight: '抱佛脚祈福', tags: ['祈福', '佛教文化'] },
        { id: 'LS-008', name: '九龙灌浴', image: '/assets/images/fountain.jpg', highlight: '接取祈福圣水', tags: ['祈福', '演艺'] }
      );
    }
    
    // 默认推荐
    if (recommendations.length === 0) {
      recommendations = [
        { id: 'LS-006', name: '灵山大佛', image: '/assets/images/buddha.jpg', highlight: '世界最高露天青铜释迦牟尼立像', tags: ['必游', '佛教文化'] },
        { id: 'LS-007', name: '灵山梵宫', image: '/assets/images/palace.jpg', highlight: '佛教艺术的卢浮宫', tags: ['必游', '建筑艺术'] },
        { id: 'LS-008', name: '九龙灌浴', image: '/assets/images/fountain.jpg', highlight: '花开见佛的神圣瞬间', tags: ['必游', '演艺'] }
      ];
    }
    
    // 去重
    const uniqueRecommendations = [];
    const ids = new Set();
    for (const item of recommendations) {
      if (!ids.has(item.id)) {
        ids.add(item.id);
        uniqueRecommendations.push(item);
      }
    }
    
    this.setData({ recommendAttractions: uniqueRecommendations.slice(0, 5) });
  },

  // 跳转到聊天页
  goToChat() {
    wx.switchTab({ url: '/pages/chat/chat' });
  },

  // 跳转到地图页
  goToMap() {
    wx.switchTab({ url: '/pages/map/map' });
  },

  // 跳转到路线推荐
  goToRoute() {
    wx.navigateTo({ url: '/pages/route/route' });
  },

  // 跳转到门票预订
  goToTickets() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  // 跳转到景点详情
  goToAttraction(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/attraction/attraction?id=${id}` });
  },

  // 点击Banner
  onBannerTap(e) {
    const item = e.currentTarget.dataset.item;
    if (item.link) {
      wx.navigateTo({ url: item.link });
    }
  },

  // 显示实用信息
  showInfo(e) {
    const type = e.currentTarget.dataset.type;
    let content = '';
    
    switch (type) {
      case 'openTime':
        content = '开放时间：\n旺季（3月-11月）：07:00-17:30\n淡季（12月-2月）：07:30-17:00\n\n表演时间：\n九龙灌浴：10:00、11:30、14:00、15:30\n《吉祥颂》：10:35、11:30、14:00、16:00';
        break;
      case 'ticket':
        content = '门票价格：\n成人票：210元/人\n优惠票：120元/人（学生、60-69岁老人）\n免票：70岁以上老人、残疾人、现役军人\n\n包含：灵山大佛、灵山梵宫、九龙灌浴、五印坛城等';
        break;
      case 'traffic':
        content = '交通指南：\n\n公交：\n• 无锡火车站乘坐88路、89路直达\n• 鼋头渚乘坐88路直达\n\n自驾：\n• 沪宁高速无锡东出口→太湖大道→梁清路→环湖路→灵山\n• 锡宜高速阳山出口→陆马公路→灵山';
        break;
      case 'service':
        content = '服务中心：\n\n游客中心：景区入口处\n咨询电话：0510-85689999\n投诉电话：0510-85689118\n\n服务项目：\n• 行李寄存\n• 轮椅租借\n• 导览设备租借\n• 母婴室';
        break;
    }
    
    wx.showModal({
      title: '实用信息',
      content: content,
      showCancel: false,
      confirmText: '知道了'
    });
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
