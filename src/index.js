import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import vuetify from './plugins/vuetify.js';

import axios from 'axios'
import './styles/index.scss';

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';
axios.defaults.params = { APPID: 'cc1784c705369804b4f0145167a57987', units: 'metric' };
// btw, axios in v0.19 have bug with default params so need to use older package.

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App />'
})