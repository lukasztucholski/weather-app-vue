<template>
  <div>
    <AppHeader />
    <TrackedWeathers />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import TrackedWeathers from '../components/TrackedWeathers.vue'

export default {
  name: 'Home',

  components: { AppHeader, TrackedWeathers }
}
</script>

<style lang="scss"></style>