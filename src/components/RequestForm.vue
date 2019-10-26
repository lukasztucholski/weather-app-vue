<template>
  <v-container class="mt-5">
    <v-row justify="center">
      <v-card width="600">
        <v-card-title>Check current weather in your city!</v-card-title>
        <v-form @keyup.native.enter="getWeather({ city, selectedMode })" class="mt-5 mx-4">
          <v-text-field v-model="city" :error-messages="errors.city" label="Enter City" outlined />
          <v-select
            :items="items.forUI"
            v-model="mode"
            label="Want You Current Weather or 5-Day Forecast?"
            outlined
          />
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn :loading="loading.btn" @click="getWeather({ city, selectedMode })">SUBMIT</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row
      v-if="Object.keys(weather).length > 0 && weather.main"
      justify="center"
      class="mt-5"
    >Current temperature in {{ weather.name }}: {{ weather.main.temp }} &deg;C</v-row>
    <v-row
      v-if="weather.list"
      justify="center"
      class="mt-5"
    >Forecasted temperature in {{ weather.city.name }}: {{ weather.list[0].main.temp }} &deg;C</v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RequestForm',

  data() {
    return {
      city: '',
      mode: '',
      items: {
        forUI: ['Current Weather', '5 Days Forecast'],
        forJS: ['current', '5-days-forecast']
      }
    }
  },

  computed: {
    ...mapGetters('weather', ['errors', 'loading', 'weather']),

    selectedMode() {
      const indexOfSelectedItemByUser = this.items.forUI.indexOf(this.mode)
      return this.items.forJS[indexOfSelectedItemByUser]
    }
  },

  methods: {
    ...mapActions('weather', ['getWeather'])
  }
}
</script>