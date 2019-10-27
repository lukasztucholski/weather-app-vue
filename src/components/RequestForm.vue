<template>
  <v-container class="mt-5">
    <v-row justify="center">
      <v-card width="600">
        <v-card-title class="display-1">Track the weather in Your city!</v-card-title>
        <span class="caption ml-4">Tracked weathers are saved in localStorage</span>
        <v-form class="mt-5 mx-4">
          <v-text-field v-model="city" :error-messages="errors.city" label="Enter City" outlined />
          <v-select
            :items="items.forUI"
            v-model="mode"
            label="Want You Current Weather or Forecast?"
            outlined
          />
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn
            :disabled="!mode || !city"
            :loading="loading.btn"
            @click="getWeather({ city, mode: selectedMode })"
          >SUBMIT</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
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
        forUI: ['Current Weather', 'Forecast'],
        forJS: ['weather', 'forecast']
      }
    }
  },

  computed: {
    ...mapGetters('weather', ['errors', 'loading']),

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