<template lang="html">
  <div class="home-id-one">

    <div class="background"></div>

    <section class="home-id-one-flex">
      <div class="home-id-one-text-container">
        <h1>{{ this.vuexHomeTitle }}</h1>
        <div v-html="this.vuexHomeContent" />
        <hr />
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

  .home-id-one {
    font-size: 100%;

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
      height: 100%;
      position: absolute;
      width: 100%;
      // @media (min-width: 900px) {
      //   align-items: center;
      //   transform: translateY(-12%);
      // }
      .home-id-one-text-container {
        // border: 1px dashed red;
        color: #303030;
        font-family: $primary-font;
        padding: 3rem 3rem;
        @media (min-width: 900px) {
          padding: 3rem 6rem;
        }
      }
    }

    .timer-bar-container {
      // border: 1px solid grey;
      border-right: 1px solid red;
      bottom: 3rem;
      height: 20px;
      left: 3rem;
      position: fixed;
      width: 25%;
      @media (min-width: 900px) {
        left: 6rem;
      }
      .timer-bar-fill {
        background: red;
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
