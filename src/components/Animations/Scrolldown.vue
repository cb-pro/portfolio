<template lang="html">
  <div class="comp-scrolldown">

      <div class="any-wrapper" v-if="this.$store.state.scrollActive">
        <div class="line"></div>
        <svg width="60px" height="32px" viewBox="619 379 60 32" version="1.1">
            <defs></defs>
            <polyline id="Path" stroke="#979797" stroke-width="3" stroke-linecap="round" fill="none" transform="translate(650.000000, 395.000000) rotate(-180.000000) translate(-650.000000, -395.000000) " points="620 410 650 380 680 410"></polyline>
        </svg>
      </div>

  </div>
</template>

<script>
export default {
  created () {
    setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll)
    }, 2000)
  },
  methods: {
    handleScroll () {
      this.$store.state.scrollActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .comp-scrolldown {
    .any-wrapper {
      align-items: flex-end;
      // background: hsla(0, 50%, 50%,.1);
      // border: 1px dashed red;
      display: flex;
      justify-content: center;
      height: 50px;
      margin: 0;
      opacity: 0;
      padding: 0;
      // position: fixed;
      // right: .5rem;
      transition: 1s ease-in-out;
      width: 60px;
      transform: scale(.4);
      transform-origin: right top;
      // top: 60%;
      @media (min-width: 900px) {
        // right: 6.5rem;
        transform: scale(.8);
        // top: 45%;
      }


      animation-name: ani;
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-delay: .5s;
      animation-iteration-count: infinite;

      @keyframes ani {
        from {
          height: 50px;
          opacity: 0;
        }
        25% {
          height: 125px;
          opacity: 1;
        }
        50% {
          height: 200px;
        }
        60% {
          opacity: 0;
        }
        99% {
          height: 200px;
          opacity: 0;
        }
        100% {
          height: 50px;
          opacity: 0;
        }
      }

      .line {
        background: #979797;
        height: 100%;
        width: 3px;
      }

      svg {
        position: absolute;
        transform: translateX(-1px);
        @media (min-width: 900px) {
          transform: translateX(-.5px);
        }
      }
    }
  }
</style>
