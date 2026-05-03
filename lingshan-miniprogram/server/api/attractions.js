// server/api/attractions.js - 景点API

const express = require('express');
const router = express.Router();

// 景点数据
const attractions = {
  'LS-001': {
    id: 'LS-001',
    name: '灵山大照壁',
    position: '景区入口处',
    highlight: '华夏第一壁',
    description: '赵朴初先生亲笔题写鎏金"灵山胜境"四字，长39.8米，高7米，采用优质青石雕刻而成。',
    culture: '背面刻有《小灵山》诗，将无锡小灵山与印度灵鹫山相媲美，奠定整个景区的佛教文化基调。',
    tips: '景区入口处打卡点，适合拍摄湖光壁影同框美景',
    image: '/assets/images/wall.jpg',
    tags: ['历史人文', '文化'],
    visitTime: 15
  },
  'LS-002': {
    id: 'LS-002',
    name: '五明桥',
    position: '大照壁北侧',
    highlight: '佛教智慧象征',
    description: '5座石拱桥并列，代表佛教五种核心智慧：声明、因明、内明、医方明、工巧明。',
    culture: '寓意过桥即能开启智慧、走向觉悟。',
    tips: '漫步过桥，在行走中体悟五明智慧的内涵',
    image: '/assets/images/bridge.jpg',
    tags: ['佛教文化', '建筑'],
    visitTime: 10
  },
  'LS-003': {
    id: 'LS-003',
    name: '佛足坛',
    position: '菩提大道起点',
    highlight: '佛教朝圣核心节点',
    description: '巨型佛足印一对，每只足印长1.2米，宽0.6米，青铜铸造，足心刻有32种吉祥图案。',
    culture: '复刻佛祖释迦牟尼真身脚印，象征"佛足所至，佛光普照"',
    tips: '瞻仰佛足，亲手触摸足心吉祥图案，寄托祈福心愿',
    image: '/assets/images/buddha-foot.jpg',
    tags: ['佛教文化', '祈福'],
    visitTime: 15
  },
  'LS-004': {
    id: 'LS-004',
    name: '五智门',
    position: '核心景区入口处',
    highlight: '核心景区门户',
    description: '高16.8米，宽35米，五门六柱石牌坊造型，汉白玉雕刻。五门象征五方五佛，六柱代表六度波罗蜜。',
    culture: '穿过这道门，便正式从"凡俗之境"踏入"禅意圣地"',
    tips: '拍摄牌坊全景，解读门柱经文与门楣图案',
    image: '/assets/images/gate.jpg',
    tags: ['佛教文化', '建筑'],
    visitTime: 15
  },
  'LS-005': {
    id: 'LS-005',
    name: '菩提大道',
    position: '五智门北侧',
    highlight: '禅意清幽的朝圣步道',
    description: '长约250米，两侧种植近百棵从印度引进的正宗菩提树。',
    culture: '象征佛陀在菩提树下悟道成佛的艰辛历程，营造清净悠远的禅境',
    tips: '漫步林荫拱廊，感受禅意清幽，春季可观菩提花',
    image: '/assets/images/bodhi.jpg',
    tags: ['自然风光', '佛教文化'],
    visitTime: 20
  },
  'LS-006': {
    id: 'LS-006',
    name: '灵山大佛',
    position: '景区核心区域',
    highlight: '世界最高露天青铜释迦牟尼立像',
    description: '通高88米，佛体79米，莲花瓣9米，总用铜量725吨。右手施无畏印，左手施与愿印。',
    culture: '216级登云道暗合佛教108烦恼与108愿望，前段为"烦恼尽除"，后段为"愿望圆满"',
    tips: '登顶抱佛脚，俯瞰太湖全景，感受大佛宏伟气势',
    image: '/assets/images/buddha.jpg',
    tags: ['佛教文化', '祈福', '必游'],
    visitTime: 60
  },
  'LS-007': {
    id: 'LS-007',
    name: '灵山梵宫',
    position: '景区核心区域',
    highlight: '佛教艺术的卢浮宫',
    description: '建筑面积7.2万平方米，造价18亿，融合菩提伽耶塔风格与中国石窟艺术。',
    culture: '内部汇集东阳木雕、敦煌壁画、扬州漆器、景泰蓝须弥灯等多种传统工艺',
    tips: '观看《吉祥颂》演出（每日10:35、11:30、14:00、16:00）',
    image: '/assets/images/palace.jpg',
    tags: ['建筑艺术', '佛教文化', '必游'],
    visitTime: 90
  },
  'LS-008': {
    id: 'LS-008',
    name: '九龙灌浴',
    position: '景区中轴线上',
    highlight: '花开见佛的神圣瞬间',
    description: '总高27.5米，青铜重量260吨，中央为7.2米高鎏金太子佛像。',
    culture: '再现释迦牟尼诞生时"九龙吐水"的经典场景',
    tips: '表演结束后可接取祈福圣水，寓意吉祥安康',
    image: '/assets/images/fountain.jpg',
    tags: ['佛教文化', '演艺', '祈福'],
    visitTime: 30
  },
  'LS-009': {
    id: 'LS-009',
    name: '五印坛城',
    position: '景区东侧',
    highlight: '藏传佛教文化瑰宝',
    description: '占地面积约5000平方米，藏传佛教风格建筑，金顶红墙。',
    culture: '坛城内供奉五方五佛，壁画面积达1500平方米',
    tips: '体验藏传佛教文化，亲手转动经筒，感受"转经一圈，福慧双增"',
    image: '/assets/images/tancheng.jpg',
    tags: ['佛教文化', '建筑艺术'],
    visitTime: 45
  }
};

/**
 * 获取所有景点
 * GET /api/attractions
 */
router.get('/', (req, res) => {
  try {
    const list = Object.values(attractions).map(a => ({
      id: a.id,
      name: a.name,
      position: a.position,
      highlight: a.highlight,
      image: a.image,
      tags: a.tags,
      visitTime: a.visitTime
    }));

    res.json({
      success: true,
      data: list,
      total: list.length
    });
  } catch (error) {
    res.status(500).json({ error: '获取景点列表失败' });
  }
});

/**
 * 获取景点详情
 * GET /api/attractions/:id
 */
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const attraction = attractions[id];

    if (!attraction) {
      return res.status(404).json({ error: '景点不存在' });
    }

    res.json({
      success: true,
      data: attraction
    });
  } catch (error) {
    res.status(500).json({ error: '获取景点详情失败' });
  }
});

/**
 * 根据标签筛选景点
 * POST /api/attractions/filter
 */
router.post('/filter', (req, res) => {
  try {
    const { tags } = req.body;
    let filtered = Object.values(attractions);

    if (tags && tags.length > 0) {
      filtered = filtered.filter(a =>
        a.tags.some(tag => tags.includes(tag))
      );
    }

    res.json({
      success: true,
      data: filtered,
      total: filtered.length
    });
  } catch (error) {
    res.status(500).json({ error: '筛选景点失败' });
  }
});

/**
 * 搜索景点
 * GET /api/attractions/search/:keyword
 */
router.get('/search/:keyword', (req, res) => {
  try {
    const { keyword } = req.params;
    const results = Object.values(attractions).filter(a =>
      a.name.includes(keyword) ||
      a.highlight.includes(keyword) ||
      a.description.includes(keyword)
    );

    res.json({
      success: true,
      data: results,
      total: results.length
    });
  } catch (error) {
    res.status(500).json({ error: '搜索景点失败' });
  }
});

module.exports = router;
