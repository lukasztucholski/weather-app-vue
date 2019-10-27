import { DataTracker } from '../index.js';

export default class WeatherModel {
  constructor() {
    this.request_date = new Date().toLocaleDateString();
    this.request_time = new Date().toLocaleTimeString();
  }

  static async getWeather({ city, mode }) {
    try {
      const weather = await DataTracker.getData({ city, mode });
      return weather.data
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
