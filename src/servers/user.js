import axios from './axios';

// 用户登录接口
export const login = (data) => {
  return axios.post('/login', data);
};

// 获取用户信息接口
export const getUserInfo = () => {
  return axios.get('/user/info');
};

// 用户登出接口
export const logout = () => {
  return axios.post('/logout');
};
