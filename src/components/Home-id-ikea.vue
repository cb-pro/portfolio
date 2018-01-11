<template lang="html">
  <div class="home-id-ikea">

    <div class="background"></div>

    <section class="home-id-ikea-flex">
      <div class="home-id-ikea-text-container">
        <!-- <h1>{{ this.vuexHomeTitle }}</h1> -->
        <img src="../../static/gfx/ids/id-ikea.svg" alt="">
        <div class="content-ikea" v-html="this.vuexHomeContent" />
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

  .home-id-ikea {

    .background {
      background: #0048B1;
      bottom: 0;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      z-index: -1
    }



    .home-id-ikea-flex {
      // border: 1px dashed green;
      display: flex;
      justify-content: center;
      .home-id-ikea-text-container {
        // border: 1px dashed red;
        color: #fff;
        font-family: $primary-font;
        padding: 3rem 3rem;
        h1 {
          color: yellow;
        }
        img {
          height: 2.3rem;
          margin-top: .5rem;
          margin-bottom: 2.7rem;
        }
        div {
          // font-family: 'verdana';
        }
      }
    }
  }

</style>
