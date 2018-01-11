<template lang="html">
  <div class="home-id-clas">

    <div class="background"></div>

    <section class="home-id-clas-flex">
      <div class="home-id-clas-text-container">
        <!-- <h1>{{ this.vuexHomeTitle }}</h1> -->
        <img src="../../static/gfx/ids/id-clas.svg" alt="">
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

  .home-id-clas {

    .background {
      background: #fff;
      bottom: 0;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      z-index: -1
    }

    .home-id-clas-flex {
      // border: 1px dashed green;
      display: flex;
      justify-content: center;
      .home-id-clas-text-container {
        // border: 1px dashed red;
        color: #777373;
        font-family: $primary-font;
        padding: 3rem 3rem;
        h1 {
          color: yellow;
        }
        img {
          height: 3rem;
          margin-bottom: 2.7rem;
        }
        div {
          font-family: arial, sans-serif;
        }
      }
    }
  }

</style>
