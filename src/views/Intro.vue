<template lang="html">
  <div class="intro">
    <button @click="redirect" style="position:fixed;bottom:0;opacity:.1;">Link</button>
    <section class="intro-container">
      <div class="logo">
        <img src="../../static/gfx/logos/bogsti-logo-chromata.jpg" alt="">
      </div>
      <div class="text">
        <h2>Christoffer Bogsti</h2>
        <h6>Designer & Utvikler</h6>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    redirect () {
      this.$router.push('hjem')
    }
  },
  created () {
    // var image = document.querySelector('img')
    //
    // chromata = new Chromata(image, {
    //   colorMode: 'greyscale',
    //   compositeOperation: 'lighten',
    //   iterationLimit: 0,
    //   key: 'high',
    //   lineWidth: 1,
    //   lineMode: 'square',
    //   origin: ['bottom'],
    //   outputSize: 'original',
    //   pathFinderCount: 12,
    //   speed: 3,
    //   turningAngle: Math.PI * 2
    // })
  }
}
</script>

<style lang="scss" scoped>
  .intro {
    background: #fff;
    // border: 1px dashed red;
    bottom: 0;
    font-family: helvetica, arial, sans-serif;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;

    .intro-container {
      // align-items: center;
      // border: 1px dashed red;
      // display: flex;
      flex-direction: column;
      height: 100%;
      // justify-content: center;
      // text-align: center;
      width: 100%;

      .logo {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        img {
          width: 160px;
          // margin-bottom: 5rem;
        }
      }

      .text {
        bottom: 2.3rem;
        margin: .8rem;
        padding-left: 2rem;
        position: absolute;

        h2,h6 {
          margin: 0rem;
        }

        h2 {

        }
        h6 {
          font-weight: 400;
        }
      }
    }
  }
</style>
