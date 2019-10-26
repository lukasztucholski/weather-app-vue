import Vue from 'vue';
import Vuex from 'vuex';
import weather from './weather.js';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { weather },
  plugins: [createPersistedState()]
})
