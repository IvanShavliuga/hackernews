import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router';
import store from './store';

export const eventBus = new Vue();


Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
