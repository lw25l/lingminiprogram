// server/services/ai.js - AI服务封装

/**
 * AI服务配置
 */
const AI_CONFIG = {
  // 讯飞星火认知大模型
  xfyun: {
    appId: process.env.XFYUN_APP_ID,
    apiKey: process.env.XFYUN_API_KEY,
    apiSecret: process.env.XFYUN_API_SECRET,
    model: 'spark-v3.5'
  },
  // 其他AI服务可在此配置
};

/**
 * 调用AI大模型
 * @param {string} query - 用户问题
 * @param {Array} history - 对话历史
 * @param {Array} interests - 用户兴趣
 * @returns {Object} AI回复
 */
async function chat(query, history = [], interests = []) {
  try {
    // 如果配置了讯飞星火API
    if (AI_CONFIG.xfyun.apiKey) {
      return await callXfyunSpark(query, history, interests);
    }

    // 默认返回
    return {
      content: '您好！我是灵山胜境AI导游小灵。我目前处于离线模式，知识库可以回答大部分问题。如需更智能的对话，请配置AI大模型API。',
      recommendations: []
    };
  } catch (error) {
    console.error('AI调用错误:', error);
    throw error;
  }
}

/**
 * 调用讯飞星火认知大模型
 */
async function callXfyunSpark(query, history, interests) {
  // TODO: 实现讯飞星火API调用
  // 参考文档: https://www.xfyun.cn/doc/spark/Web.html
  
  const prompt = buildPrompt(query, interests);
  
  // 模拟返回
  return {
    content: `关于"${query}"，让我为您详细介绍...`,
    recommendations: []
  };
}

/**
 * 构建提示词
 */
function buildPrompt(query, interests) {
  const systemPrompt = `你是灵山胜境景区的AI智能导游"小灵"，你的职责是：
1. 为游客提供景点讲解和文化介绍
2. 推荐个性化游览路线
3. 回答游客关于景区的问题
4. 提供实用的游览建议

你的性格：亲切、专业、耐心、幽默
回答风格：简洁明了、生动有趣、富有文化底蕴

当前游客的兴趣偏好：${interests.join('、') || '未设置'}`;

  return `${systemPrompt}\n\n游客问题：${query}`;
}

/**
 * 语音识别（讯飞）
 */
async function recognizeVoice(audioPath) {
  // TODO: 接入讯飞语音识别API
  return {
    text: '识别结果'
  };
}

/**
 * 语音合成（讯飞）
 */
async function synthesizeVoice(text, voiceId = 'xiaoyan') {
  // TODO: 接入讯飞语音合成API
  return {
    audioUrl: '/static/audio/sample.mp3'
  };
}

module.exports = {
  chat,
  recognizeVoice,
  synthesizeVoice
};
