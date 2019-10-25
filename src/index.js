import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import axios from 'axios'
import './styles/index.scss';

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://api.openweathermap.org/data/2.5/';
axios.defaults.params = { APPID: 'cc1784c705369804b4f0145167a57987' };
// btw, axios in v0.19 have bug with default params so need to use older package.

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App />'
})