// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
// import products from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    // products,
  },
});
