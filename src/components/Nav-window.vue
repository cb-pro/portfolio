<template lang="html">
  <div class="nav-window">

    <div class="nav-links">
      <router-link to="/"><h3 @click="toggleNavBtn">Home</h3></router-link>
      <router-link to="/about"><h3 @click="toggleNavBtn">About</h3></router-link>
      <router-link to="/portfolio"><h3 @click="toggleNavBtn">Portfolio</h3></router-link>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    showNav () {
      return this.$store.getters.showNav
    }
  },
  data () {
    return {
      //
    }
  },
  methods: {
    toggleNavBtn () {
      this.$store.dispatch('toggleNav')
      this.$store.state.toggleText = false
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/main.scss';

  .nav-window {
    background: #e6e6e6;
    bottom: 0;
    font-family: $primary-font;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 8;

    .nav-links {
      h3 {
        border: 1px dashed red;
        display: table;
      }
    }
  }
</style>
