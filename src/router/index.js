import VueRouter from 'vue-router';

import App from '../App.vue';
import New from '../components/Pages/New';
import TopNews from '../components/Pages/TopNews';
import Show from '../components/Pages/Show';


const router = new VueRouter({
  routes: [
    { path: '/', component: TopNews },
    { path: '/top', name: top, component: TopNews },
    { path: '/new', name: top, component: New },
    { path: '/show', name: top, component: Show },
    { path: '*', component: { template: '<h3 style="margin: 6rem">Not Found!</h3>' } }
  ],
  mode: 'history',
});

export default router;
