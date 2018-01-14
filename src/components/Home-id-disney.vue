<template lang="html">
  <div class="home-id-disney">

    <div class="background"></div>

    <section class="home-id-disney-flex">
      <div class="home-id-disney-text-container">
        <!-- <h1>{{ this.vuexHomeTitle }}</h1> -->
        <img src="../../static/gfx/ids/id-disney.svg" alt="">
        <div class="content-disney" v-html="this.vuexHomeContent" />
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
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700');

  @font-face {
    font-family: 'waltograph';
    src: url('../../static/fonts/disney/waltograph-regular.ttf');
    font-weight: 400;
  }

  .home-id-disney {

    .background {
      background: #16207E;
      bottom: 0;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      z-index: -1
    }



    .home-id-disney-flex {
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
      .home-id-disney-text-container {
        // border: 1px dashed red;
        color: #fff;
        font-family: $primary-font;
        max-width: 900px;
        padding: 3rem 3rem;
        h1 {
          color: #fff;
          font-family: 'waltograph';
          font-weight: 400;
          font-size: 5rem;
          line-height: 5rem;
          margin-bottom: 2.7rem;

        }
        img {
          height: 4rem;
          margin-top: .5rem;
          margin-bottom: 2.7rem;
        }
        div {
          font-family: 'Josefin Sans', sans-serif;;
        }
      }
    }

    .timer-bar-container {
      // border-left: 1px solid grey;
      border-right: 1px solid #fff;
      bottom: 3rem;
      height: 20px;
      left: 3rem;
      position: fixed;
      width: 25%;
      .timer-bar-fill {
        background: #fff;
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
