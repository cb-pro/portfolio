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
      height: 100%;
      position: absolute;
      width: 100%;
      @media (min-width: 900px) {
        align-items: center;
        transform: translateY(-12%);
      }
      .home-id-clas-text-container {
        // border: 1px dashed red;
        color: #777373;
        font-family: $primary-font;
        max-width: 900px;
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

    .timer-bar-container {
      // border-left: 1px solid grey;
      border-right: 1px solid #4FA3C9;
      bottom: 3rem;
      height: 20px;
      left: 3rem;
      position: fixed;
      width: 25%;
      .timer-bar-fill {
        background: #4FA3C9;
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
