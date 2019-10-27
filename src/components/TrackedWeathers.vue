<template>
  <v-container>
    <v-row v-if="weathers.length > 0" justify="center" class="mt-5">
      <v-expansion-panels popout focusable>
        <v-expansion-panel
          v-for="weather in weathers"
          :key="`${weather.city}-${weather.country}-${weather.mode}-${weather.request_time}`"
        >
          <v-expansion-panel-header>
            <span>{{ weather.city }}, {{ weather.country }}</span>
            <span>(mode: {{ weather.mode === 'weather' ? 'Current Weather' : 'Forecast' }})</span>
            <span>(last update: {{ weather.request_date }} {{ weather.request_time }})</span>
          </v-expansion-panel-header>

          <v-expansion-panel-content class="caption">
            <v-btn
              class="my-4"
              small
              @click="getWeather({ city: weather.city, mode: weather.mode })"
            >Refresh</v-btn>

            <div class="my-4">
              <span class="mr-5">Sunrise: {{ weather.sunrise }}</span>
              <span>Sunset: {{ weather.sunset }}</span>
            </div>

            <div v-if="weather.mode === 'forecast'" class="d-flex">
              <div v-for="forecast in weather.forecast" :key="forecast.time" class="mr-4">
                <p>Time: {{ forecast._time }}</p>
                <p>Weather: {{ forecast._main }}</p>
                <p>Cloudy: {{ forecast.cloudy }} %</p>
                <p>Pressure: {{ forecast.pressure }}</p>
                <p>Forecast temp: {{ forecast.temp }} &#186C</p>
                <p>Forecast min temp: {{ forecast.temp_min }} &#186C</p>
                <p>Forecast max temp: {{ forecast.temp_max }} &#186C</p>
                <p>Wind: {{ forecast.wind_speed }} m/s</p>
                <p>Wind: {{ forecast.wind_deg }} deg</p>
              </div>
            </div>

            <div v-else-if="weather.mode === 'weather'">
              <p>Time: {{ weather.weather._time }}</p>
              <p>Weather: {{ weather.weather._main }}</p>
              <p>Cloudy: {{ weather.weather.cloudy }} %</p>
              <p>Pressure: {{ weather.weather.pressure }}</p>
              <p>Current temp: {{ weather.weather.temp }} &#186C</p>
              <p>Current min temp: {{ weather.weather.temp_min }} &#186C</p>
              <p>Current max temp: {{ weather.weather.temp_max }} &#186C</p>
              <p>Wind: {{ weather.weather.wind_speed }} m/s</p>
              <p>Wind: {{ weather.weather.wind_deg }} deg</p>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TrackedWeathers',

  computed: {
    ...mapGetters('weather', ['weathers'])
  },

  methods: {
    ...mapActions('weather', ['getWeather'])
  }
}
</script>