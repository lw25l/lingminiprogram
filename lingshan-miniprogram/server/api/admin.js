// server/api/admin.js - 管理后台API

const express = require('express');
const router = express.Router();

/**
 * 获取统计数据
 * GET /api/admin/stats
 */
router.get('/stats', (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        totalVisitors: 12856,
        todayVisitors: 356,
        totalChats: 8923,
        todayChats: 89,
        avgSatisfaction: 4.8,
        hotQuestions: [
          { question: '灵山大佛有多高', count: 1234 },
          { question: '推荐一条游览路线', count: 987 },
          { question: '景区门票多少钱', count: 876 }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({ error: '获取统计数据失败' });
  }
});

/**
 * 获取知识库列表
 * GET /api/admin/knowledge
 */
router.get('/knowledge', (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        total: 50,
        items: [
          { id: 1, question: '灵山大佛有多高', answer: '通高88米...', hits: 1234 },
          { id: 2, question: '景区门票多少钱', answer: '成人票210元...', hits: 876 }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({ error: '获取知识库失败' });
  }
});

/**
 * 更新知识库
 * POST /api/admin/knowledge
 */
router.post('/knowledge', (req, res) => {
  try {
    const { question, answer } = req.body;
    
    res.json({
      success: true,
      message: '知识库更新成功'
    });
  } catch (error) {
    res.status(500).json({ error: '更新知识库失败' });
  }
});

/**
 * 获取用户反馈
 * GET /api/admin/feedback
 */
router.get('/feedback', (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        total: 156,
        items: [
          { id: 1, type: '建议', content: '希望增加语音导览功能', status: '处理中' },
          { id: 2, type: '问题', content: '地图定位不准确', status: '已解决' }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({ error: '获取反馈失败' });
  }
});

module.exports = router;
