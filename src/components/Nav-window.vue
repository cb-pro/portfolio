<template lang="html">
  <div class="nav-window">

    <div class="nav-links">
      <router-link :to="{ name: 'Home', params: {} }"><h3>Home</h3></router-link>
      <router-link :to="{ name: 'About', params: {about} }"><h3>About</h3></router-link>
      <router-link :to="{ name: 'Portfolio', params: {portfolio} }"><h3>Portfolio</h3></router-link>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .nav-window {
    background: #e6e6e6;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 8;
  }
</style>
