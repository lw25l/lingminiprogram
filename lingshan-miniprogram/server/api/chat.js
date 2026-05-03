// server/api/chat.js - 聊天API

const express = require('express');
const router = express.Router();
const knowledge = require('../knowledge/attractions');
const aiService = require('../services/ai');

/**
 * 聊天接口
 * POST /api/chat
 */
router.post('/', async (req, res) => {
  try {
    const { query, userId, interests, history } = req.body;
    
    if (!query) {
      return res.status(400).json({ error: '请输入问题' });
    }

    // 记录用户查询（用于数据分析）
    logUserQuery(userId, query);

    // 1. 先尝试本地知识库匹配
    const localResponse = knowledge.getResponse(query);
    
    if (localResponse && localResponse.content) {
      return res.json({
        success: true,
        source: 'knowledge',
        ...localResponse
      });
    }

    // 2. 调用AI大模型（如果配置了）
    if (process.env.AI_API_KEY) {
      try {
        const aiResponse = await aiService.chat(query, history, interests);
        return res.json({
          success: true,
          source: 'ai',
          content: aiResponse.content,
          recommendations: aiResponse.recommendations || []
        });
      } catch (aiError) {
        console.error('AI调用失败:', aiError);
        // AI失败时返回知识库默认回复
      }
    }

    // 3. 返回默认回复
    res.json({
      success: true,
      source: 'default',
      content: getWelcomeMessage(),
      recommendations: knowledge.getTopAttractions(3)
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: '服务错误，请稍后重试' });
  }
});

/**
 * 语音识别接口
 * POST /api/chat/voice/recognize
 */
router.post('/voice/recognize', async (req, res) => {
  try {
    // 这里应该接入讯飞语音识别API
    // 示例返回
    res.json({
      success: true,
      text: '示例识别结果'
    });
  } catch (error) {
    res.status(500).json({ error: '语音识别失败' });
  }
});

/**
 * 语音合成接口
 * POST /api/chat/voice/synthesize
 */
router.post('/voice/synthesize', async (req, res) => {
  try {
    const { text } = req.body;
    // 这里应该接入讯飞TTS API
    res.json({
      success: true,
      audioUrl: '/static/audio/sample.mp3'
    });
  } catch (error) {
    res.status(500).json({ error: '语音合成失败' });
  }
});

/**
 * 获取聊天历史
 * GET /api/chat/history/:userId
 */
router.get('/history/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const history = await getChatHistory(userId);
    res.json({ success: true, history });
  } catch (error) {
    res.status(500).json({ error: '获取历史失败' });
  }
});

// 辅助函数
function logUserQuery(userId, query) {
  // TODO: 记录到数据库
  console.log(`[${new Date().toISOString()}] User ${userId}: ${query}`);
}

function getWelcomeMessage() {
  const messages = [
    '您好！我是灵山胜境AI导游小灵，很高兴为您服务！有什么我可以帮您的吗？',
    '欢迎来到灵山胜境！我可以为您介绍景点、推荐路线、回答问题。请问您想了解什么？'
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

async function getChatHistory(userId) {
  // TODO: 从数据库获取
  return [];
}

module.exports = router;
