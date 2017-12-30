<template lang="html">
  <div class="nav">
    <NavWindow class="NavWindow" :class="{showNavWindow: showNavWindow}" />
    <div class="nav-btn" @click="showNavWindow = !showNavWindow"></div>
  </div>
</template>

<script>
import NavWindow from './Nav-window.vue'

export default {
  components: {
    'NavWindow': NavWindow
  },
  data () {
    return {
      showNavWindow: false
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">

  .nav {

    .NavWindow {
      opacity: 0;
      transition: 800ms ease-in-out;
      z-index: -1;
    }
    .showNavWindow {
      opacity: .8;
      transition: 800ms ease-in-out;
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
