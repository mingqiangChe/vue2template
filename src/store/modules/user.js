// src/store/modules/user.js
const state = {
  name: '',
  isLoggedIn: false,
};

const mutations = {
  SET_USER(state, payload) {
    state.name = payload.name;
    state.isLoggedIn = payload.isLoggedIn;
  },
};

const actions = {
  login({ commit }, user) {
    // 模拟登录逻辑
    commit('SET_USER', { name: user.name, isLoggedIn: true });
  },
};

const getters = {
  isAuthenticated: (state) => state.isLoggedIn,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
