<template lang="html">
  <div class="home-id-one">

    <div class="background"></div>

    <section class="home-id-one-flex">
      <div class="home-id-one-text-container">
        <h1>{{ this.vuexHomeTitle }}</h1>
        <div v-html="this.vuexHomeContent" />
      </div>
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
      position: fixed;
      right: 0;
      top: 0;
      z-index: -1
    }

    .home-id-one-flex {
      // border: 1px dashed green;
      display: flex;
      justify-content: center;
      .home-id-one-text-container {
        // border: 1px dashed red;
        color: #303030;
        font-family: $primary-font;
        padding: 3rem 3rem;
      }
    }
  }

</style>
