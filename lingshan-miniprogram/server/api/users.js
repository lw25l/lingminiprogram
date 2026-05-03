// server/api/users.js - 用户API

const express = require('express');
const router = express.Router();

/**
 * 用户登录
 * POST /api/user/login
 */
router.post('/login', (req, res) => {
  try {
    const { code } = req.body;
    
    // 这里应该调用微信登录API
    // 示例返回
    res.json({
      success: true,
      token: 'sample_token_' + Date.now(),
      userId: 'user_' + Date.now(),
      openid: 'sample_openid'
    });
  } catch (error) {
    res.status(500).json({ error: '登录失败' });
  }
});

/**
 * 获取用户信息
 * GET /api/user/info
 */
router.get('/info', (req, res) => {
  try {
    // 从token解析用户ID
    res.json({
      success: true,
      data: {
        userId: 'user_123456',
        nickname: '游客',
        avatarUrl: '/assets/images/default-avatar.png',
        visitCount: 0,
        chatCount: 0
      }
    });
  } catch (error) {
    res.status(500).json({ error: '获取用户信息失败' });
  }
});

/**
 * 更新用户信息
 * POST /api/user/update
 */
router.post('/update', (req, res) => {
  try {
    const { nickname, avatarUrl, interests } = req.body;
    
    res.json({
      success: true,
      message: '更新成功'
    });
  } catch (error) {
    res.status(500).json({ error: '更新用户信息失败' });
  }
});

/**
 * 获取用户游览历史
 * GET /api/user/history
 */
router.get('/history', (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        visitedAttractions: [],
        savedRoutes: [],
        chatHistory: []
      }
    });
  } catch (error) {
    res.status(500).json({ error: '获取历史失败' });
  }
});

module.exports = router;
