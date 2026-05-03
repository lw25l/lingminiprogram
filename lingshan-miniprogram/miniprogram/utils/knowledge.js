// utils/knowledge.js - 本地知识库

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
    visitTime: 60,
    performance: {
      time: '全天开放',
      duration: '建议游览1小时'
    }
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
    performance: {
      name: '《吉祥颂》',
      time: '10:35、11:30、14:00、16:00',
      duration: '20分钟'
    }
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
    performance: {
      name: '九龙灌浴表演',
      time: '10:00、11:30、14:00、15:30',
      duration: '15分钟'
    }
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

// 常见问题知识库
const qaKnowledge = {
  '灵山大佛有多高': {
    content: '灵山大佛通高88米，其中佛体79米，莲花瓣9米，总高101.5米。它是目前世界上最高的露天青铜释迦牟尼立像，总用铜量达725吨。',
    relatedAttractions: ['LS-006']
  },
  '灵山大佛高度': {
    content: '灵山大佛通高88米，其中佛体79米，莲花瓣9米，总高101.5米。',
    relatedAttractions: ['LS-006']
  },
  '景区门票多少钱': {
    content: '灵山胜境门票价格：成人票210元/人，优惠票120元/人（适用于学生、60-69岁老人），70岁以上老人、残疾人、现役军人凭证件免票。门票包含灵山大佛、灵山梵宫、九龙灌浴、五印坛城等核心景点。',
    relatedAttractions: []
  },
  '门票价格': {
    content: '成人票210元/人，优惠票120元/人（学生、60-69岁老人），70岁以上老人、残疾人、现役军人免票。',
    relatedAttractions: []
  },
  '开放时间': {
    content: '灵山胜境开放时间：旺季（3月-11月）07:00-17:30，淡季（12月-2月）07:30-17:00。建议游玩时间4-6小时。',
    relatedAttractions: []
  },
  '九龙灌浴几点开始': {
    content: '九龙灌浴表演时间：每日4-5场，通常为10:00、11:30、14:00、15:30。表演时长约15分钟。建议提前10分钟到场，表演结束后可接取祈福圣水。',
    relatedAttractions: ['LS-008']
  },
  '灵山梵宫': {
    content: '灵山梵宫被誉为"佛教艺术的卢浮宫"，建筑面积7.2万平方米，造价18亿。内部有28米高星空穹顶、华藏世界琉璃壁画、东阳木雕群等艺术珍品。《吉祥颂》演出每日4场：10:35、11:30、14:00、16:00，时长20分钟。',
    relatedAttractions: ['LS-007']
  },
  '推荐路线': {
    content: '我为您推荐经典游览路线（约4-5小时）：\n\n1️⃣ 灵山大照壁（15分钟）→\n2️⃣ 五明桥（10分钟）→\n3️⃣ 佛足坛（15分钟）→\n4️⃣ 五智门（15分钟）→\n5️⃣ 菩提大道（20分钟）→\n6️⃣ 九龙灌浴（30分钟，看表演）→\n7️⃣ 灵山大佛（60分钟，登顶抱佛脚）→\n8️⃣ 灵山梵宫（90分钟，看演出）→\n9️⃣ 五印坛城（45分钟）',
    relatedAttractions: ['LS-001', 'LS-006', 'LS-007', 'LS-008', 'LS-009']
  },
  '有什么好玩的': {
    content: '灵山胜境核心体验：\n\n🏔️ 必游景点：灵山大佛（抱佛脚祈福）、灵山梵宫（看《吉祥颂》演出）、九龙灌浴（接圣水）\n\n🎭 特色体验：登216级登云道、观看大型演出、转动经筒祈福\n\n📸 打卡推荐：大佛脚下俯瞰太湖、梵宫穹顶拍照、九龙灌浴彩虹',
    relatedAttractions: ['LS-006', 'LS-007', 'LS-008']
  },
  '交通怎么去': {
    content: '前往灵山胜境的交通方式：\n\n🚌 公交：无锡火车站乘坐88路、89路直达；鼋头渚乘坐88路直达\n\n🚗 自驾：\n• 沪宁高速无锡东出口→太湖大道→梁清路→环湖路→灵山\n• 锡宜高速阳山出口→陆马公路→灵山\n\n📍 地址：江苏省无锡市滨湖区马山镇灵山路1号',
    relatedAttractions: []
  }
};

/**
 * 获取知识库回复
 */
function getResponse(query) {
  // 标准化查询
  const normalizedQuery = query.toLowerCase().replace(/[？?。！!，,]/g, '');
  
  // 直接匹配
  if (qaKnowledge[query]) {
    return formatResponse(qaKnowledge[query]);
  }
  
  // 模糊匹配
  for (const key in qaKnowledge) {
    if (normalizedQuery.includes(key.toLowerCase()) || key.toLowerCase().includes(normalizedQuery)) {
      return formatResponse(qaKnowledge[key]);
    }
  }
  
  // 关键词匹配
  const keywords = {
    '大佛': 'LS-006',
    '梵宫': 'LS-007',
    '九龙': 'LS-008',
    '坛城': 'LS-009',
    '菩提': 'LS-005',
    '照壁': 'LS-001',
    '门票': '门票',
    '价格': '门票',
    '多少钱': '门票',
    '时间': '开放时间',
    '开放': '开放时间',
    '交通': '交通怎么去',
    '怎么去': '交通怎么去',
    '路线': '推荐路线',
    '推荐': '推荐路线'
  };
  
  for (const keyword in keywords) {
    if (normalizedQuery.includes(keyword)) {
      const matchedKey = keywords[keyword];
      if (qaKnowledge[matchedKey]) {
        return formatResponse(qaKnowledge[matchedKey]);
      }
      // 景点ID匹配
      if (attractions[matchedKey]) {
        const attr = attractions[matchedKey];
        return {
          content: `${attr.name}：${attr.highlight}\n\n${attr.description}\n\n${attr.culture}\n\n游览提示：${attr.tips}`,
          recommendations: [attractions[matchedKey]]
        };
      }
    }
  }
  
  // 默认回复
  return {
    content: `感谢您的提问！关于"${query}"，我目前的知识库中暂无相关信息。\n\n您可以问我：\n• 灵山大佛有多高？\n• 推荐一条游览路线\n• 灵山梵宫有什么特色？\n• 景区门票多少钱？\n• 九龙灌浴几点开始？`,
    recommendations: [
      attractions['LS-006'],
      attractions['LS-007'],
      attractions['LS-008']
    ]
  };
}

/**
 * 格式化回复
 */
function formatResponse(qaData) {
  const recommendations = qaData.relatedAttractions 
    ? qaData.relatedAttractions.map(id => attractions[id]).filter(Boolean)
    : [];
  
  return {
    content: qaData.content,
    recommendations: recommendations,
    actions: recommendations.length > 0 ? [
      { type: 'route', text: '查看推荐路线', params: 'custom' }
    ] : []
  };
}

/**
 * 获取景点详情
 */
function getAttraction(id) {
  return attractions[id] || null;
}

/**
 * 获取所有景点
 */
function getAllAttractions() {
  return Object.values(attractions);
}

/**
 * 根据兴趣推荐景点
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

module.exports = {
  getResponse,
  getAttraction,
  getAllAttractions,
  recommendByInterests,
  attractions
};
