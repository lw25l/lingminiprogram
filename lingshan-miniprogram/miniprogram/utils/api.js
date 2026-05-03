// utils/api.js - API请求封装

const app = getApp();

const BASE_URL = 'https://api.lingshan-guide.com/api';

/**
 * GET请求
 */
function get(url, data = {}) {
  return request(url, 'GET', data);
}

/**
 * POST请求
 */
function post(url, data = {}) {
  return request(url, 'POST', data);
}

/**
 * 上传文件
 */
function upload(url, filePath) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: BASE_URL + url,
      filePath: filePath,
      name: 'file',
      header: {
        'Authorization': `Bearer ${wx.getStorageSync('token')}`
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(res.data));
        } else {
          reject(res);
        }
      },
      fail: reject
    });
  });
}

/**
 * 统一请求方法
 */
function request(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${wx.getStorageSync('token')}`
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else if (res.statusCode === 401) {
          // 未授权，跳转登录
          wx.removeStorageSync('token');
          reject(res);
        } else {
          reject(res);
        }
      },
      fail: reject
    });
  });
}

module.exports = {
  get,
  post,
  upload,
  
  // 景点相关API
  getAttractions: () => get('/attractions'),
  getAttractionDetail: (id) => get(`/attractions/${id}`),
  
  // 路线相关API
  getRoutes: () => get('/routes'),
  getRouteDetail: (id) => get(`/routes/${id}`),
  
  // 聊天相关API
  chat: (data) => post('/chat', data),
  
  // 用户相关API
  login: (code) => post('/user/login', { code }),
  getUserInfo: () => get('/user/info'),
  updateUserInfo: (data) => post('/user/update', data),
  
  // 反馈相关API
  submitFeedback: (data) => post('/feedback', data),
  getHistory: () => get('/user/history')
};
