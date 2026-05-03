# 灵山胜境AI数字人智能导览系统

## 📋 项目简介

基于微信小程序的AI数字人智能景区导览系统，为灵山胜境景区提供7x24小时智能导游服务。系统集成了多模态交互、智能问答、个性化推荐等核心功能，助力文旅产业数字化转型。

## 🎯 实现目标

1. **游客交互端**：支持语音/文本多模态交互，提供实时智能问答和个性化路线推荐
2. **管理后台**：知识库管理、数字人形象配置、游客数据分析、运营数据大屏
3. **技术指标**：事实性问答准确率≥90%，语音问答延迟<5秒

## 🏗️ 项目结构

```
lingshan-miniprogram/
├── miniprogram/              # 小程序前端
│   ├── pages/                # 页面
│   │   ├── index/           # 首页 - 景点推荐、快捷入口
│   │   ├── chat/            # 聊天页 - AI对话、语音输入
│   │   ├── map/             # 地图页 - 景点导航
│   │   ├── route/           # 路线推荐 - 多条件筛选
│   │   └── attraction/      # 景点详情
│   ├── components/          # 组件
│   ├── utils/               # 工具函数（API、知识库）
│   ├── assets/              # 静态资源
│   └── app.js/json/wxss     # 全局配置
│
├── server/                   # 后端服务
│   ├── api/                 # API路由
│   ├── knowledge/           # 知识库
│   └── app.js               # 服务入口
│
└── admin/                    # 管理后台（Web）
```

## ✨ 核心功能

### 游客交互侧
- ✅ 多模态交互：语音/文本输入，数字人表情同步
- ✅ 智能问答：本地知识库+AI大模型双引擎
- ✅ 个性化推荐：根据兴趣偏好推荐游览路线
- ✅ 地图导航：GPS定位，景点标记，路径规划
- ✅ 语音识别：讯飞/微信语音识别
- ✅ 语音合成：讯飞TTS/微信朗读

### 管理后台侧
- ✅ 知识库管理：上传/更新讲解词、文史资料
- ✅ 数字人配置：外观、服装、声音设置
- ✅ 数据分析：游客关注点、情感趋势报告
- ✅ 数据大屏：服务人次、热门问答、满意度

## 🛠️ 技术栈

- **前端**：微信小程序原生开发
- **后端**：Node.js + Express
- **数据库**：JSON文件存储 / MongoDB
- **AI能力**：多模态大模型API
- **语音技术**：讯飞语音识别/合成
- **地图服务**：微信地图SDK

## 🚀 快速开始

### 1. 小程序端
```bash
cd miniprogram
# 使用微信开发者工具打开项目
```

### 2. 后端服务
```bash
cd server
npm install
node app.js
# 访问 http://localhost:3000/api/health
```

### 3. 安装依赖
```bash
# 小程序端无需额外依赖
# 后端需要：npm install express cors body-parser
```

## 📖 API文档

详见 [server/API.md](./server/API.md)

## 📊 测试数据

知识库包含：
- 9个核心景点信息
- 完整历史文化介绍
- 常见问题解答库
- 4条预设游览路线
- 评分/评价数据

## 🔧 扩展开发

### 接入AI大模型
```javascript
// 在 server/services/ai.js 中配置
const aiService = {
  async chat(query, history, interests) {
    // 调用OpenAI/通义千问/智谱API
    return await openAI.chat({
      messages: [...history, { role: 'user', content: query }],
      stream: false
    });
  }
};
```

### 添加新功能
- 登录注册模块
- 支付/会员系统
- LBS定位导航
- AR实景导览
- 社交分享

## 📝 许可证

MIT License
