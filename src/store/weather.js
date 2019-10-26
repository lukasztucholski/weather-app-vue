import { api, CurrentWeatherModel, ForecastWeatherModel } from '../utils/index.js';

export default {
  namespaced: true,

  state: {
    errors: {},
    loading: {},
    weather: {},
  },

  mutations: {
    SET_ERRORS: (state, payload) => {
      state.errors = { ...state.errors, ...payload }
    },
    SET_LOADING: (state, payload) => {
      state.loading = { ...state.loading, ...payload }
    },
    SET_WEATHER: (state, payload) => {
      state.weather = { ...payload }
    }
  },

  actions: {
    async getWeather({ commit }, { city, selectedMode }) {
      commit('SET_LOADING', { btn: true })

      try {
        let response, weather;

        if (selectedMode === 'current') {
          response = await api.getCurrentWeather(city);
          weather = new CurrentWeatherModel(response.data)
        }
        else if (selectedMode === '5-days-forecast') {
          response = await api.getForecastWeather(city);
          weather = new ForecastWeatherModel(response.data)
        }
        else return;

        commit('SET_WEATHER', weather);
      } catch (error) {
        console.error(error)
        // commit('SET_ERRORS', { city: error.response.data.message })
      } finally {
        commit('SET_LOADING', { btn: false })
      }
    }
  },

  getters: {
    errors: (state) => state.errors,
    loading: (state) => state.loading,
    weather: (state) => state.weather,
  },
}