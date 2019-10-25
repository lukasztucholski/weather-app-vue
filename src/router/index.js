import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Weather App - Homepage',
      },
    },
  ],
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router