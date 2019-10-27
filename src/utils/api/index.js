import axios from 'axios'

class DataTracker {
  constructor({ url, params }) {
    this.url = url;
    this.params = params
  }

  getData({ city, mode }) {
    return axios.get(`${this.url}${mode}/?q=${city}`, { params })
  };
}
const url = 'https://api.openweathermap.org/data/2.5/';
const params = { APPID: 'cc1784c705369804b4f0145167a57987', units: 'metric', cnt: 5 };

export default new DataTracker({ url, params })