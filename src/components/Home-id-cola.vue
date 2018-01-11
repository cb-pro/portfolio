<template lang="html">
  <div class="home-id-cola">

    <div class="background"></div>

    <section class="home-id-cola-flex">
      <div class="home-id-cola-text-container">
        <!-- <h1>{{ this.vuexHomeTitle }}</h1> -->
        <img src="../../static/gfx/ids/id-cola.svg" alt="">
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
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700');

  .home-id-cola {

    .background {
      background: #F3000D;
      bottom: 0;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      z-index: -1
    }

    .home-id-cola-flex {
      // border: 1px dashed green;
      display: flex;
      justify-content: center;
      .home-id-cola-text-container {
        // border: 1px dashed red;
        color: #fff;
        font-family: $primary-font;
        padding: 3rem 3rem;
        h1 {
          color: yellow;
        }
        img {
          height: 4.5rem;
          margin-bottom: 2.7rem;
        }
        div {
          font-family: 'Roboto Condensed', sans-serif;
        }
      }
    }
  }

</style>
