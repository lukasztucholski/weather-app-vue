import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import vuetify from './utils/plugins/vuetify.js';

import './styles/index.scss';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App />'
})