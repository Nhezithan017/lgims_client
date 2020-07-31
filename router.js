import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: page('auth/login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: page('main/dashboard.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: page('admin/users/index.vue')
  },
];

export function createRouter(){
  return new Router({
      routes,
      mode: 'history'
  });
}
