<template lang="html">
  <div class="home-id-one">
    <div class="bg"></div>
    <h1>{{ this.vuexHomeTitle }}</h1>
    <div v-html="this.vuexHomeContent" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      vuexHomeTitle: this.$store.state.data[0].home.title,
      vuexHomeContent: this.$store.state.data[0].home.content
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .home-id-one {
    font-family: $primary-font;
    color: #303030;

    .bg {
      // background: red;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1
    }
  }

</style>
