# 灵山胜境AI数字人智能导游小程序

<div align="center">

🤖 **AI数字人导游** | 🗺️ **智能导览** | 🎯 **个性化推荐**

</div>

---

## 📖 项目简介

灵山胜境AI数字人智能导游小程序是一个为灵山胜境景区打造的智能导览系统，集成了AI问答、数字人导游、路线推荐、地图导航等功能。

### ✨ 核心特性

- 🤖 **AI数字人导游"小灵"** - 提供智能问答和语音讲解
- 🗺️ **智能导览地图** - GPS定位、景点标记、路线规划
- 🎯 **个性化推荐** - 基于用户兴趣的景点和路线推荐
- 🎤 **多模态交互** - 支持语音和文本输入
- 📚 **本地知识库** - 9个核心景点，Q&A准确率≥90%
- ⚡ **快速响应** - 语音Q&A延迟<5秒

---

## 🏗️ 项目结构

```
lingshan-miniprogram/
├── miniprogram/              # 小程序前端
│   ├── pages/
│   │   ├── index/           # 首页
│   │   ├── chat/            # AI智能导游
│   │   ├── map/             # 导览地图
│   │   ├── route/           # 路线推荐
│   │   ├── attraction/      # 景点详情
│   │   └── profile/         # 个人中心
│   ├── utils/
│   │   ├── api.js           # API封装
│   │   └── knowledge.js     # 本地知识库
│   ├── app.js
│   ├── app.json
│   └── app.wxss
├── server/                   # Node.js后端
│   ├── api/                 # API接口
│   ├── services/            # 服务模块
│   ├── knowledge/           # 知识库
│   └── app.js
└── README.md
```

---

## 🚀 快速开始

### 前端（小程序）

1. **克隆项目**
```bash
git clone https://github.com/your-username/lingshan-miniprogram.git
cd lingshan-miniprogram
```

2. **导入微信开发者工具**
- 打开微信开发者工具
- 选择 `miniprogram` 目录
- 使用测试号或您的AppID
- 点击"编译"预览

3. **配置API地址**（可选）
```javascript
// miniprogram/app.js
globalData: {
  apiBaseUrl: 'http://localhost:3000/api'  // 本地开发
  // apiBaseUrl: 'https://api.lingshan-guide.com/api'  // 生产环境
}
```

### 后端（Node.js）

1. **安装依赖**
```bash
cd server
npm install
```

2. **启动服务**
```bash
npm start
# 或
node app.js
```

服务将在 `http://localhost:3000` 运行

---

## 📱 功能模块

### 1. 首页
- 轮播图展示核心景点
- 快捷入口（AI导游、地图、路线、门票）
- 个性化景点推荐
- 热门景点列表
- 今日活动时间表
- 实用信息查询

### 2. AI智能导游 ⭐
- 数字人"小灵"动画展示
- 智能问答（景点、路线、门票等）
- 语音输入识别
- 景点卡片推荐
- 快捷问题按钮

### 3. 导览地图
- 景区地图展示
- 景点标记点
- 筛选功能（按类型）
- 搜索景点
- 路线规划

### 4. 路线推荐
- 4条预设路线
  - 经典游览路线（4-5小时）
  - 佛教文化深度游（3-4小时）
  - 亲子休闲游（2-3小时）
  - 摄影打卡游（3-4小时）
- 基于兴趣的个性化推荐
- 路线详情和游览提示

### 5. 景点详情
- 景点轮播图
- 基本信息
- 文化内涵讲解
- 游览提示
- 相关景点推荐

### 6. 个人中心
- 用户信息
- 访问记录
- 收藏景点
- 设置

---

## 📚 知识库

### 景点数据（9个核心景点）

| ID | 名称 | 亮点 | 游览时长 |
|----|------|------|----------|
| LS-001 | 灵山大照壁 | 华夏第一壁 | 15分钟 |
| LS-002 | 五明桥 | 佛教智慧象征 | 10分钟 |
| LS-003 | 佛足坛 | 佛教朝圣核心节点 | 15分钟 |
| LS-004 | 五智门 | 核心景区门户 | 15分钟 |
| LS-005 | 菩提大道 | 禅意清幽的朝圣步道 | 20分钟 |
| LS-006 | 灵山大佛 ⭐ | 世界最高露天青铜释迦牟尼立像 | 60分钟 |
| LS-007 | 灵山梵宫 ⭐ | 佛教艺术的卢浮宫 | 90分钟 |
| LS-008 | 九龙灌浴 ⭐ | 花开见佛的神圣瞬间 | 30分钟 |
| LS-009 | 五印坛城 | 藏传佛教文化瑰宝 | 45分钟 |

### Q&A知识库

**示例问答**：

**Q: 灵山大佛有多高？**
A: 灵山大佛通高88米，其中佛体79米，莲花瓣9米，总高101.5米。它是目前世界上最高的露天青铜释迦牟尼立像，总用铜量达725吨。

**Q: 门票多少钱？**
A: 灵山胜境门票价格：成人票210元/人，优惠票120元/人（适用于学生、60-69岁老人），70岁以上老人、残疾人、现役军人凭证件免票。

**Q: 九龙灌浴几点开始？**
A: 九龙灌浴表演时间：每日4-5场，通常为10:00、11:30、14:00、15:30。表演时长约15分钟。

**Q: 推荐一条游览路线？**
A: 经典游览路线（4-5小时）：灵山大照壁→五明桥→佛足坛→五智门→菩提大道→九龙灌浴→灵山大佛→灵山梵宫→五印坛城

---

## 🎨 设计规范

### 主题配色
```css
--primary-color: #4A90D9      /* 主题蓝 */
--primary-light: #6BA8E5
--primary-dark: #3A7BC8
--secondary-color: #FFB347    /* 次要色橙 */
--success-color: #52C41A
--warning-color: #FAAD14
--error-color: #F5222D
```

### 地图配置
- 中心坐标：经度 120.35，纬度 31.48
- 默认缩放：16级

---

## 🔧 技术栈

### 前端
- **框架**: 微信小程序原生开发
- **语言**: JavaScript, WXML, WXSS
- **地图**: 微信地图组件
- **语音**: 微信录音API + 讯飞语音识别（可选）

### 后端
- **运行时**: Node.js
- **框架**: Express
- **数据存储**: JSON文件 / MongoDB
- **AI服务**: 本地知识库 + 讯飞星火大模型（可选）

---

## 📊 性能指标

- ✅ Q&A准确率：≥90%
- ✅ 语音响应延迟：<5秒
- ✅ 首屏加载时间：<2秒
- ✅ 页面切换流畅度：60fps

---

## 🔐 环境配置

### 开发环境
```javascript
// miniprogram/app.js
apiBaseUrl: 'http://localhost:3000/api'
```

### 生产环境
```javascript
// miniprogram/app.js
apiBaseUrl: 'https://api.lingshan-guide.com/api'
```

### 微信小程序配置
```json
// miniprogram/app.json
{
  "permission": {
    "scope.userLocation": {
      "desc": "您的位置信息将用于为您提供导航服务"
    }
  }
}
```

---

## 📦 部署

### 小程序部署
1. 在微信开发者工具中点击"上传"
2. 在微信公众平台提交审核
3. 审核通过后发布

### 后端部署
```bash
# 安装PM2
npm install -g pm2

# 启动服务
pm2 start server/app.js --name lingshan-api

# 查看日志
pm2 logs lingshan-api
```

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📄 许可证

MIT License

---

## 📞 联系方式

- 项目地址：https://github.com/lw25l/lingshan-miniprogram
- 问题反馈：https://github.com/lw25l/lingshan-miniprogram/issues

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给一个 Star！**

Made with ❤️ for 灵山胜境

</div>
