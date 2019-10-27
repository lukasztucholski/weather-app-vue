import { WeatherModel, CurrentWeatherModel, ForecastWeatherModel } from '../utils/index.js';

export default {
  namespaced: true,

  state: {
    errors: {},
    loading: {},
    weathers: [],
  },

  mutations: {
    SET_ERRORS: (state, payload) => {
      state.errors = { ...payload }
    },
    SET_LOADING: (state, payload) => {
      state.loading = { ...state.loading, ...payload }
    },
    ADD_WEATHER: (state, payload) => {
      state.weathers.push(payload)
    },
    UPDATE_WEATHER: (state, payload) => {
      const weatherToUpdate = state.weathers.find(
        weather => weather.city === payload.city
          && weather.country === payload.country
          && weather.mode === payload.mode
      );
      const indexOfWeatherToUpdate = state.weathers.indexOf(weatherToUpdate)
      state.weathers[indexOfWeatherToUpdate] = { ...payload };
      state.weathers = [...state.weathers];
    }
  },

  actions: {
    async getWeather({ commit, state }, { city, mode }) {
      commit('SET_LOADING', { btn: true })
      commit('SET_ERRORS', {})

      try {
        const dataTrackerResponse = await WeatherModel.getWeather({ city, mode })
        let weatherModel;
        if (mode === 'weather') {
          weatherModel = new CurrentWeatherModel(dataTrackerResponse, mode)
        } else if (mode === 'forecast') {
          weatherModel = new ForecastWeatherModel(dataTrackerResponse, mode)
        } else return;

        const weatherIsAlreadyTracked = state.weathers.find(
          stateWeather => stateWeather.city === weatherModel.city
            && stateWeather.country === weatherModel.country
            && stateWeather.mode === weatherModel.mode
        );

        if (weatherIsAlreadyTracked) {
          commit('UPDATE_WEATHER', weatherModel);
        } else {
          commit('ADD_WEATHER', weatherModel);
        }

      } catch (error) {
        console.error(error)
        commit('SET_ERRORS', { city: error.response ? error.response.data.message : 'Error. Please, refresh site.' })
      } finally {
        commit('SET_LOADING', { btn: false })
      }
    }
  },

  getters: {
    errors: (state) => state.errors,
    loading: (state) => state.loading,
    weathers: (state) => state.weathers,
  },
}