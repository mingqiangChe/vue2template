import Vue from 'vue';
import Router from 'vue-router';
import homeRoutes from './modules/home';

Vue.use(Router);

const routes = [...homeRoutes];

export default new Router({
  mode: 'history',
  routes,
});
