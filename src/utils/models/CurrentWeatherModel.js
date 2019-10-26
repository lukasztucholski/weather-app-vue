import {BaseModel} from '../index.js';


export default class CurrentWeatherModel extends BaseModel {
  constructor(weather = {}) {
    super();

    this.type = 'current'
    this.city = weather.name;
    this.country = weather.sys.country;
    this.sunrise = weather.sys.sunrise;
    this.sunset = weather.sys.sunset;
    this.timezone = weather.timezone;

    this.weather = {
      _time: weather.dt,
      _description: weather.weather[0].description,
      _main: weather.weather[0].main,
      cloudy: weather.clouds.all,
      pressure: weather.main.pressure,
      temp: weather.main.temp,
      temp_min: weather.main.temp_min,
      temp_max: weather.main.temp_max,
      wind_speed: weather.wind.speed,
      wind_deg: weather.wind.deg,
    }
  }
}
