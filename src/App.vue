<template lang="html">
  <div class="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import dataJSON from './data/data.json'
import Nav from './components/Nav.vue'

export default {
  components: {
    'Nav': Nav
  },
  created () {
    this.importData()
  },
  methods: {
    importData: function () {
      this.$store.state.data = dataJSON
    }
  }
}
</script>

<style lang="css">
</style>
