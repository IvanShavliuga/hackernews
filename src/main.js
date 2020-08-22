import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';

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
  created () {
    Axios.get("/api")
      .then(response => console.log("response", response.data))  
  }
})
