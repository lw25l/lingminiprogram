// server/api/routes.js - 路线推荐API

const express = require('express');
const router = express.Router();

// 预设路线数据
const routes = {
  'classic': {
    id: 'classic',
    name: '经典游览路线',
    duration: '4-5小时',
    description: '涵盖灵山胜境所有核心景点，适合首次到访游客',
    highlights: ['灵山大佛', '灵山梵宫', '九龙灌浴'],
    stops: [
      { order: 1, attractionId: 'LS-001', name: '灵山大照壁', duration: 15, tip: '入口打卡，拍摄湖光壁影' },
      { order: 2, attractionId: 'LS-002', name: '五明桥', duration: 10, tip: '漫步过桥，体悟五明智慧' },
      { order: 3, attractionId: 'LS-003', name: '佛足坛', duration: 15, tip: '瞻仰佛足，触摸吉祥图案' },
      { order: 4, attractionId: 'LS-004', name: '五智门', duration: 15, tip: '拍摄牌坊，解读门柱经文' },
      { order: 5, attractionId: 'LS-005', name: '菩提大道', duration: 20, tip: '漫步林荫，感受禅意' },
      { order: 6, attractionId: 'LS-008', name: '九龙灌浴', duration: 30, tip: '观看表演，接取圣水' },
      { order: 7, attractionId: 'LS-006', name: '灵山大佛', duration: 60, tip: '登顶抱佛脚，俯瞰太湖' },
      { order: 8, attractionId: 'LS-007', name: '灵山梵宫', duration: 90, tip: '欣赏建筑，观看演出' },
      { order: 9, attractionId: 'LS-009', name: '五印坛城', duration: 45, tip: '转经祈福，体验藏传文化' }
    ],
    totalDistance: '约3公里',
    difficulty: '中等'
  },
  'buddhist': {
    id: 'buddhist',
    name: '佛教文化深度游',
    duration: '5-6小时',
    description: '深度体验佛教文化，适合对佛教文化感兴趣的游客',
    highlights: ['灵山大佛', '灵山梵宫', '五印坛城'],
    stops: [
      { order: 1, attractionId: 'LS-001', name: '灵山大照壁', duration: 20, tip: '研读《小灵山》诗，了解灵山渊源' },
      { order: 2, attractionId: 'LS-002', name: '五明桥', duration: 15, tip: '学习五明智慧内涵' },
      { order: 3, attractionId: 'LS-003', name: '佛足坛', duration: 20, tip: '瞻仰佛足，了解32种吉祥图案寓意' },
      { order: 4, attractionId: 'LS-004', name: '五智门', duration: 20, tip: '研读门柱经文，理解五方五佛' },
      { order: 5, attractionId: 'LS-005', name: '菩提大道', duration: 25, tip: '静心漫步，体验禅修' },
      { order: 6, attractionId: 'LS-006', name: '灵山大佛', duration: 90, tip: '深入了解大佛建造历程，登顶祈福' },
      { order: 7, attractionId: 'LS-008', name: '九龙灌浴', duration: 40, tip: '观看表演，了解释迦牟尼诞生传说' },
      { order: 8, attractionId: 'LS-007', name: '灵山梵宫', duration: 120, tip: '深度欣赏佛教艺术，观看《吉祥颂》' },
      { order: 9, attractionId: 'LS-009', name: '五印坛城', duration: 60, tip: '学习藏传佛教文化，转经祈福' }
    ],
    totalDistance: '约3.5公里',
    difficulty: '中等'
  },
  'family': {
    id: 'family',
    name: '亲子休闲游',
    duration: '3-4小时',
    description: '轻松休闲路线，适合带老人小孩的家庭',
    highlights: ['九龙灌浴', '灵山梵宫'],
    stops: [
      { order: 1, attractionId: 'LS-001', name: '灵山大照壁', duration: 10, tip: '简单打卡拍照' },
      { order: 2, attractionId: 'LS-002', name: '五明桥', duration: 10, tip: '过桥拍照' },
      { order: 3, attractionId: 'LS-005', name: '菩提大道', duration: 15, tip: '林荫下休息' },
      { order: 4, attractionId: 'LS-008', name: '九龙灌浴', duration: 30, tip: '观看表演，接圣水' },
      { order: 5, attractionId: 'LS-007', name: '灵山梵宫', duration: 90, tip: '乘电梯参观，看演出' },
      { order: 6, attractionId: 'LS-006', name: '灵山大佛', duration: 45, tip: '可选择不登顶，在广场祈福' }
    ],
    totalDistance: '约2公里',
    difficulty: '轻松'
  },
  'photography': {
    id: 'photography',
    name: '摄影打卡游',
    duration: '4-5小时',
    description: '精选最佳拍照点位，适合摄影爱好者',
    highlights: ['灵山大佛', '灵山梵宫', '九龙灌浴'],
    stops: [
      { order: 1, attractionId: 'LS-001', name: '灵山大照壁', duration: 20, tip: '最佳角度：照壁与湖水倒影' },
      { order: 2, attractionId: 'LS-005', name: '菩提大道', duration: 30, tip: '最佳角度：菩提树拱廊逆光' },
      { order: 3, attractionId: 'LS-008', name: '九龙灌浴', duration: 45, tip: '最佳角度：表演时莲花开启瞬间' },
      { order: 4, attractionId: 'LS-006', name: '灵山大佛', duration: 60, tip: '最佳角度：登云道仰拍、大佛脚下俯瞰太湖' },
      { order: 5, attractionId: 'LS-007', name: '灵山梵宫', duration: 90, tip: '最佳角度：穹顶星空、华藏世界壁画、廊厅' },
      { order: 6, attractionId: 'LS-009', name: '五印坛城', duration: 30, tip: '最佳角度：金顶红墙外观、转经筒长廊' }
    ],
    totalDistance: '约2.5公里',
    difficulty: '中等'
  }
};

/**
 * 获取所有路线
 * GET /api/routes
 */
router.get('/', (req, res) => {
  try {
    const routeList = Object.values(routes).map(r => ({
      id: r.id,
      name: r.name,
      duration: r.duration,
      description: r.description,
      highlights: r.highlights,
      difficulty: r.difficulty
    }));
    
    res.json({
      success: true,
      data: routeList
    });
  } catch (error) {
    res.status(500).json({ error: '获取路线失败' });
  }
});

/**
 * 获取路线详情
 * GET /api/routes/:id
 */
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const route = routes[id];
    
    if (!route) {
      return res.status(404).json({ error: '路线不存在' });
    }
    
    res.json({
      success: true,
      data: route
    });
  } catch (error) {
    res.status(500).json({ error: '获取路线详情失败' });
  }
});

/**
 * 根据条件推荐路线
 * POST /api/routes/recommend
 */
router.post('/recommend', (req, res) => {
  try {
    const { duration, interests, groupType, difficulty } = req.body;
    
    // 简单的推荐逻辑
    let recommendedRoutes = [];
    
    if (groupType === 'family' || difficulty === 'easy') {
      recommendedRoutes.push(routes['family']);
    }
    
    if (interests && interests.includes('佛教文化')) {
      recommendedRoutes.push(routes['buddhist']);
    }
    
    if (interests && interests.includes('摄影')) {
      recommendedRoutes.push(routes['photography']);
    }
    
    // 默认推荐经典路线
    if (recommendedRoutes.length === 0) {
      recommendedRoutes.push(routes['classic']);
    }
    
    res.json({
      success: true,
      data: recommendedRoutes
    });
  } catch (error) {
    res.status(500).json({ error: '推荐路线失败' });
  }
});

/**
 * 生成自定义路线
 * POST /api/routes/custom
 */
router.post('/custom', (req, res) => {
  try {
    const { startAttraction, endAttraction, duration, mustVisit } = req.body;
    
    // 这里可以实现路线规划算法
    // 简单示例：返回经典路线
    res.json({
      success: true,
      data: routes['classic'],
      message: '已根据您的需求生成推荐路线'
    });
  } catch (error) {
    res.status(500).json({ error: '生成路线失败' });
  }
});

module.exports = router;
