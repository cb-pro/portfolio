<template lang="html">
  <div class="home-id-one">

    <div class="background"></div>

    <section class="home-id-one-text-container">
      <h1>{{ this.vuexHomeTitle }}</h1>
      <div v-html="this.vuexHomeContent" />
    </section>

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

    .background {
      // background: red;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1
    }

    .home-id-one-text-container {
      color: #303030;
      font-family: $primary-font;
      margin: 0 auto;
      padding-top: 6%;
      width: 83%;

      div {
        margin-top: -1rem;
      }
    }
  }

</style>
