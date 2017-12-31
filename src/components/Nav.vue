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
      opacity: 0;
      transition: 500ms ease-in-out;
      z-index: -1;
    }
    .showNavWindow {
      opacity: .9;
      transition: 500ms ease-in-out;
      z-index: 8;
    }
    .nav-btn {
      background: #505050;
      bottom: 40px;
      height: 40px;
      position: absolute;
      right: 40px;
      width: 40px;
      z-index: 9;
    }
  }

</style>
