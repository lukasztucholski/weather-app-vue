import axios from 'axios'

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';
axios.defaults.params = { APPID: 'cc1784c705369804b4f0145167a57987', units: 'metric', cnt: 5 };
// btw, axios in v0.19 have bug with default params so need to use older package.

export default {
  getCurrentWeather: (city) => axios.get(`weather/?q=${city}`),
  getForecastWeather: (city) => axios.get(`forecast/?q=${city}`)
}