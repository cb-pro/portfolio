<template lang="html">
  <div class="nav">
    <NavWindow class="NavWindow" :class="{showNavWindow: showNav}" />
    <div class="nav-btn" @click="toggleNavBtn"></div>
  </div>
</template>

<script>
import NavWindow from './Nav-window.vue'

export default {
  components: {
    'NavWindow': NavWindow
  },
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
    }
  }
}
</script>

<style lang="scss">

  .nav {

    .NavWindow {
      visibility: hidden;
      opacity: 0;
      transition: 500ms ease-in-out;
      z-index: -1;
    }
    .showNavWindow {
      visibility: visible;
      opacity: .9;
      transition: 500ms ease-in-out;
      z-index: 8;
    }
    .nav-btn {
      background: grey;
      border-radius: 50%;
      bottom: 30px;
      height: 45px;
      position: fixed;
      right: 30px;
      width: 45px;
      z-index: 9;
    }
  }

</style>
