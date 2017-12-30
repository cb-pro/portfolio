<template lang="html">
  <div class="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  components: {
    'Nav': Nav
  }
}
</script>

<style lang="css">
</style>
