// pages/chat/chat.js
const app = getApp();
const api = require('../../utils/api.js');

Page({
  data: {
    showDigitalHuman: true,
    digitalHumanAvatar: '/assets/images/ai-avatar.png',
    digitalHumanName: '小灵',
    userAvatar: '/assets/images/user-avatar.png',
    
    messages: [],
    inputText: '',
    isLoading: false,
    isSpeaking: false,
    
    // 语音相关
    isRecording: false,
    showVoiceModal: false,
    voiceTip: '正在聆听...',
    voiceResult: '',
    
    // 快捷问题
    quickQuestions: [
      '灵山大佛有多高？',
      '推荐一条游览路线',
      '灵山梵宫有什么特色？',
      '九龙灌浴几点开始？',
      '景区门票多少钱？'
    ],
    
    scrollTop: 0
  },

  onLoad() {
    this.loadUserAvatar();
    this.initRecorder();
  },

  onShow() {
    // 页面显示时
  },

  // 加载用户头像
  loadUserAvatar() {
    const userInfo = app.globalData.userInfo;
    if (userInfo && userInfo.avatarUrl) {
      this.setData({ userAvatar: userInfo.avatarUrl });
    }
  },

  // 初始化录音器
  initRecorder() {
    this.recorderManager = wx.getRecorderManager();
    this.recorderManager.onStart(() => {
      this.setData({ 
        isRecording: true,
        showVoiceModal: true,
        voiceTip: '正在聆听...',
        voiceResult: ''
      });
    });
    
    this.recorderManager.onStop((res) => {
      this.setData({ isRecording: false });
      // 上传语音识别
      this.recognizeVoice(res.tempFilePath);
    });
    
    this.recorderManager.onError((err) => {
      console.error('录音错误:', err);
      this.setData({ 
        isRecording: false,
        showVoiceModal: false 
      });
      wx.showToast({ title: '录音失败', icon: 'none' });
    });
  },

  // 输入框变化
  onInputChange(e) {
    this.setData({ inputText: e.detail.value });
  },

  // 发送消息
  async sendMessage() {
    const text = this.data.inputText.trim();
    if (!text || this.data.isLoading) return;

    // 添加用户消息
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: text
    };
    
    this.setData({ 
      messages: [...this.data.messages, userMessage],
      inputText: '',
      isLoading: true
    });

    this.scrollToBottom();

    try {
      // 调用AI接口
      const response = await this.callAI(text);
      
      // 添加AI回复
      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: response.content,
        recommendations: response.recommendations || [],
        actions: response.actions || []
      };
      
      this.setData({ 
        messages: [...this.data.messages, aiMessage],
        isLoading: false
      });

      this.scrollToBottom();

      // 语音播报
      this.speak(response.content);

    } catch (error) {
      console.error('AI调用失败:', error);
      this.setData({ isLoading: false });
      
      wx.showToast({ title: '网络错误，请重试', icon: 'none' });
    }
  },

  // 发送快捷问题
  sendQuickQuestion(e) {
    const question = e.currentTarget.dataset.question;
    this.setData({ inputText: question });
    this.sendMessage();
  },

  // 调用AI接口
  async callAI(query) {
    try {
      const result = await api.post('/chat', {
        query: query,
        userId: app.globalData.userId,
        interests: app.globalData.selectedInterests,
        history: this.data.messages.slice(-10) // 最近10条历史
      });
      return result;
    } catch (error) {
      // 模拟响应（开发测试用）
      return this.getMockResponse(query);
    }
  },

  // 模拟响应（开发测试用）
  getMockResponse(query) {
    const knowledgeBase = require('../../utils/knowledge.js');
    return knowledgeBase.getResponse(query);
  },

  // 开始录音
  startRecording() {
    wx.authorize({
      scope: 'scope.record',
      success: () => {
        this.recorderManager.start({
          format: 'mp3',
          duration: 60000
        });
      },
      fail: () => {
        wx.showModal({
          title: '提示',
          content: '需要录音权限才能使用语音输入',
          success: (res) => {
            if (res.confirm) {
              wx.openSetting();
            }
          }
        });
      }
    });
  },

  // 停止录音
  stopRecording() {
    if (this.data.isRecording) {
      this.recorderManager.stop();
      this.setData({ 
        showVoiceModal: false,
        voiceTip: '识别中...'
      });
    }
  },

  // 取消录音
  cancelRecording() {
    this.setData({ 
      isRecording: false,
      showVoiceModal: false 
    });
  },

  // 语音识别
  async recognizeVoice(filePath) {
    try {
      // 调用语音识别API
      const result = await api.upload('/voice/recognize', filePath);
      
      if (result.text) {
        this.setData({ 
          inputText: result.text,
          showVoiceModal: false 
        });
        this.sendMessage();
      }
    } catch (error) {
      // 模拟识别结果
      this.setData({ 
        inputText: '灵山大佛有多高',
        showVoiceModal: false 
      });
      this.sendMessage();
    }
  },

  // 语音播报
  speak(text) {
    // 使用讯飞TTS或其他语音合成服务
    // 这里使用微信内置朗读（受限）
    // 实际项目中应接入专业TTS服务
    this.setData({ isSpeaking: true });
    
    setTimeout(() => {
      this.setData({ isSpeaking: false });
    }, 3000);
  },

  // 处理操作按钮
  handleAction(e) {
    const action = e.currentTarget.dataset.action;
    
    switch (action.type) {
      case 'route':
        wx.navigateTo({ url: `/pages/route/route?type=${action.params}` });
        break;
      case 'attraction':
        wx.navigateTo({ url: `/pages/attraction/attraction?id=${action.params}` });
        break;
      case 'map':
        wx.switchTab({ url: '/pages/map/map' });
        break;
    }
  },

  // 跳转到景点详情
  goToAttraction(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/attraction/attraction?id=${id}` });
  },

  // 滚动到底部
  scrollToBottom() {
    wx.createSelectorQuery()
      .select('.chat-messages')
      .boundingClientRect((rect) => {
        this.setData({ scrollTop: rect.height + 1000 });
      })
      .exec();
  },

  // 清空聊天
  clearChat() {
    wx.showModal({
      title: '提示',
      content: '确定要清空聊天记录吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ messages: [] });
          app.clearChatHistory();
        }
      }
    });
  },

  // 分享
  onShareAppMessage() {
    return {
      title: '灵山胜境AI智能导游',
      path: '/pages/chat/chat',
      imageUrl: '/assets/images/share.jpg'
    };
  }
});
