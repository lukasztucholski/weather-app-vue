import BaseModel from './BaseModel.js';


export default class ForecastWeatherModel extends BaseModel {
  constructor(weather = {}) {
    super();

    this.type = 'forecast'
    this.city = weather.city.name;
    this.country = weather.city.country;
    this.sunrise = weather.city.sunrise;
    this.sunset = weather.city.sunset;
    this.timezone = weather.city.timezone;

    this.forecast = weather.list.map((item) => {
      return {
        _time: item.dt,
        _description: item.weather[0].description,
        _main: item.weather[0].main,
        cloudy: item.clouds.all,
        pressure: item.main.pressure,
        temp: item.main.temp,
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
        wind_speed: item.wind.speed,
        wind_deg: item.wind.deg,
      }
    });

  }
}
