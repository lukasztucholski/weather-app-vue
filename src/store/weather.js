import axios from 'axios';

export default {
  namespaced: true,

  state: {
    errors: {},
    loading: {},
    currentWeather: {},
  },

  mutations: {
    SET_ERRORS: (state, payload) => {
      state.errors = { ...state.errors, ...payload }
    },
    SET_LOADING: (state, payload) => {
      state.loading = { ...state.loading, ...payload }
    },
    SET_CURRENT_WEATHER: (state, payload) => {
      state.currentWeather = { ...payload }
    }
  },

  actions: {
    async getWeather({ commit }, data) {
      commit('SET_LOADING', { btn: true })
      try {
        const response = await axios.get(`weather/?q=${data}`)
        console.log(response.data)
        commit('SET_CURRENT_WEATHER', response.data);
      } catch (error) {
        commit('SET_ERRORS', { city: error.response.data.message })
      } finally {
        commit('SET_LOADING', { btn: false })
      }
    }
  },

  getters: {
    errors: (state) => state.errors,
    loading: (state) => state.loading,
    currentWeather: (state) => state.currentWeather,
  },
}