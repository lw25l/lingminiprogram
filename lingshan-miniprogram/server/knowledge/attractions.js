// server/knowledge/attractions.js - 景点知识库

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
    visitTime: 15,
    avgRating: 4.9
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
    visitTime: 10,
    avgRating: 4.7
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
    visitTime: 15,
    avgRating: 4.8
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
    visitTime: 15,
    avgRating: 4.6
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
    visitTime: 20,
    avgRating: 4.5
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
    visitTime: 60,
    avgRating: 5.0,
    performance: { time: '全天开放', duration: '建议游览1小时' }
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
    visitTime: 90,
    avgRating: 4.9,
    performance: { name: '《吉祥颂》', time: '10:35、11:30、14:00、16:00', duration: '20分钟' }
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
    visitTime: 30,
    avgRating: 4.8,
    performance: { name: '九龙灌浴表演', time: '10:00、11:30、14:00、15:30', duration: '15分钟' }
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
    visitTime: 45,
    avgRating: 4.7
  }
};

/**
 * 获取所有景点
 */
function getAllAttractions() {
  return Object.values(attractions);
}

/**
 * 根据ID获取景点
 */
function getAttraction(id) {
  return attractions[id] || null;
}

/**
 * 根据标签筛选景点
 */
function filterByTag(attractions, tag) {
  return attractions.filter(a => a.tags && a.tags.includes(tag));
}

/**
 * 推荐景点
 */
function recommendByInterests(interests) {
  const allAttractions = Object.values(attractions);
  const recommended = [];
  
  for (const attraction of allAttractions) {
    for (const interest of interests) {
      if (attraction.tags.some(tag => tag.includes(interest) || interest.includes(tag))) {
        if (!recommended.find(a => a.id === attraction.id)) {
          recommended.push(attraction);
        }
      }
    }
  }
  
  return recommended.length > 0 ? recommended : allAttractions.slice(0, 5);
}

/**
 * 预设路线数据
 */
const presetRoutes = [
  {
    id: 'classic',
    name: '经典游览路线',
    duration: '4-5小时',
    description: '涵盖灵山胜境所有核心景点，适合首次到访游客',
    highlights: ['灵山大佛', '灵山梵宫', '九龙灌浴'],
    type: '家庭亲子',
    difficulty: '中等',
    coverImage: '/assets/images/route-cover.jpg',
    stops: [
      { order: 1, name: '灵山大照壁', duration: 15, tip: '入口打卡，拍摄湖光壁影' },
      { order: 2, name: '五明桥', duration: 10, tip: '漫步过桥，体悟五明智慧' },
      { order: 3, name: '佛足坛', duration: 15, tip: '瞻仰佛足，触摸吉祥图案' },
      { order: 4, name: '五智门', duration: 15, tip: '拍摄牌坊，解读门柱经文' },
      { order: 5, name: '菩提大道', duration: 20, tip: '漫步林荫，感受禅意' },
      { order: 6, name: '九龙灌浴', duration: 30, tip: '观看表演，接取圣水' },
      { order: 7, name: '灵山大佛', duration: 60, tip: '登顶抱佛脚，俯瞰太湖' },
      { order: 8, name: '灵山梵宫', duration: 90, tip: '欣赏建筑，观看演出' },
      { order: 9, name: '五印坛城', duration: 45, tip: '转经祈福，体验藏传文化' }
    ],
    totalDistance: '约3公里'
  },
  {
    id: 'buddhist',
    name: '佛教文化深度游',
    duration: '5-6小时',
    description: '深度体验佛教文化，适合对佛教文化感兴趣的游客',
    highlights: ['灵山大佛', '灵山梵宫', '五印坛城'],
    type: '情侣/朋友',
    difficulty: '中等',
    coverImage: '/assets/images/route-buddhist.jpg',
    stops: [
      { order: 1, name: '灵山大照壁', duration: 20, tip: '研读《小灵山》诗，了解灵山渊源' },
      { order: 2, name: '五明桥', duration: 15, tip: '学习五明智慧内涵' },
      { order: 3, name: '佛足坛', duration: 20, tip: '瞻仰佛足，了解32种吉祥图案' },
      { order: 4, name: '五智门', duration: 20, tip: '研读门柱经文，理解五方五佛' },
      { order: 5, name: '菩提大道', duration: 25, tip: '静心漫步，体验禅修' },
      { order: 6, name: '灵山大佛', duration: 90, tip: '深入了解大佛建造历程' },
      { order: 7, name: '九龙灌浴', duration: 40, tip: '观看表演，了解释迦牟尼诞生' },
      { order: 8, name: '灵山梵宫', duration: 120, tip: '深度欣赏佛教艺术' },
      { order: 9, name: '五印坛城', duration: 60, tip: '学习藏传佛教文化' }
    ],
    totalDistance: '约3.5公里'
  },
  {
    id: 'family',
    name: '亲子休闲游',
    duration: '3-4小时',
    description: '轻松休闲路线，适合带老人小孩的家庭',
    highlights: ['九龙灌浴', '灵山梵宫'],
    type: '家庭亲子',
    difficulty: '轻松',
    coverImage: '/assets/images/route-family.jpg',
    stops: [
      { order: 1, name: '灵山大照壁', duration: 10, tip: '简单打卡拍照' },
      { order: 2, name: '五明桥', duration: 10, tip: '过桥拍照' },
      { order: 3, name: '菩提大道', duration: 15, tip: '林荫下休息' },
      { order: 4, name: '九龙灌浴', duration: 30, tip: '观看表演，接圣水' },
      { order: 5, name: '灵山梵宫', duration: 90, tip: '乘电梯参观，看演出' },
      { order: 6, name: '灵山大佛', duration: 45, tip: '可选择不登顶' }
    ],
    totalDistance: '约2公里'
  }
];

module.exports = {
  getAllAttractions,
  getAttraction,
  filterByTag,
  recommendByInterests,
  getPresetRoutes: () => presetRoutes,
  attractions
};
