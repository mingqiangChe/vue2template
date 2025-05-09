// src/services/axios.js
import axios from 'axios';

// 创建 axios 实例
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // 设置默认 API 地址
  timeout: 5000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json', // 默认内容类型
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 请求前可以加上 token 或做其他处理
    const token = localStorage.getItem('token'); // 假设 token 存储在 localStorage 中
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 可以在这里统一处理响应数据
    return response.data; // 返回响应的 data 部分
  },
  (error) => {
    // 统一处理请求错误
    if (error.response) {
      // 服务器返回错误
      if (error.response.status === 401) {
        // 处理未授权错误（例如跳转到登录页）
        console.error('未授权，请登录');
      }
      return Promise.reject(error.response);
    } else {
      // 请求没有响应（如超时等）
      console.error('请求超时或无响应');
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
