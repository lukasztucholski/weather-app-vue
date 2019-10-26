<template>
  <v-container class="mt-5">
    <v-row justify="center">
      <v-card width="600">
        <v-card-title>Check current weather in your city!</v-card-title>
        <v-text-field
          v-model="city"
          :error-messages="errors.city"
          label="Enter City"
          outlined
          class="mt-5 mx-4"
        />
        <v-card-actions>
          <v-spacer />
          <v-btn :loading="loading.btn" @click="getWeather(city)">SUBMIT</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
    <v-row
      v-if="Object.keys(currentWeather).length > 0"
      justify="center"
      class="mt-5"
    >Current temperature in {{ currentWeather.name }}: {{ currentWeather.main.temp }} &deg;C</v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RequestForm',

  data() {
    return {
      city: ''
    }
  },

  computed: {
    ...mapGetters('weather', ['errors', 'loading', 'currentWeather'])
  },

  methods: {
    ...mapActions('weather', ['getWeather'])
  }
}
</script>