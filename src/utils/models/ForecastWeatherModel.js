import { WeatherModel, helpers } from '../index.js'

export default class ForecastWeatherModel extends WeatherModel {
  constructor(weather = {}, mode) {
    super();

    this.mode = mode;
    this.city = weather.city.name;
    this.country = weather.city.country;
    this.sunrise = helpers.dateTimeFromUnix(weather.city.sunrise);
    this.sunset = helpers.dateTimeFromUnix(weather.city.sunset);
    this.timezone = weather.city.timezone;

    this.forecast = weather.list.map((item) => {
      return {
        _time: helpers.dateWithTimeFromString(item.dt_txt),
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
