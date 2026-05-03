// server/app.js - 后端服务入口

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

// 创建Express应用
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件配置
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 静态文件
app.use('/static', express.static(path.join(__dirname, 'public')));

// API路由
const chatRoutes = require('./api/chat');
const attractionRoutes = require('./api/attractions');
const routeRoutes = require('./api/routes');
const userRoutes = require('./api/users');
const adminRoutes = require('./api/admin');

app.use('/api/chat', chatRoutes);
app.use('/api/attractions', attractionRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

// 健康检查
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// 404处理
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 灵山胜境AI导览服务已启动`);
  console.log(`📡 服务地址: http://localhost:${PORT}`);
  console.log(`⏰ 启动时间: ${new Date().toLocaleString()}`);
});

module.exports = app;
