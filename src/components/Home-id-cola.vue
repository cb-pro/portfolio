<template lang="html">
  <div class="home-id-cola">

    <div class="background"></div>

    <section class="home-id-cola-flex">
      <div class="home-id-cola-text-container">
        <!-- <h1>{{ this.vuexHomeTitle }}</h1> -->
        <img src="../../static/gfx/ids/id-cola.svg" alt="">
        <div v-html="this.vuexHomeContent" />
        <hr style="color: #fff;" />
      </div>
    </section>

    <div class="timer-bar-container">
      <div class="timer-bar-fill"></div>
    </div>

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
      height: 100%;
      position: absolute;
      width: 100%;
      // @media (min-width: 900px) {
      //   align-items: center;
      //   transform: translateY(-12%);
      // }
      .home-id-cola-text-container {
        // border: 1px dashed red;
        color: #fff;
        font-family: $primary-font;
        // max-width: 900px;
        padding: 3rem 3rem;
        @media (min-width: 900px) {
          padding: 3rem 6rem;
        }
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

    .timer-bar-container {
      // border-left: 1px solid grey;
      border-right: 2px solid #373737;
      bottom: 3rem;
      height: 20px;
      left: 3rem;
      position: fixed;
      width: 25%;
      @media (min-width: 900px) {
        left: 6rem;
      }
      .timer-bar-fill {
        background: #373737;
        height: 100%;
        animation-name: timer-bar;
        animation-duration: 14.5s;
        animation-timing-function: linear;
      }
      @keyframes timer-bar {
        from {width: 0%;}
        to {width: 100%;}
      }
    }
  }

</style>
