<template lang="html">
  <div class="intro">
    <section class="intro-container">
      <div class="logo">
        <img ref="img" src="../../static/gfx/logos/bogsti-logo-chromata.jpg" alt="" style="opacity:0;">
      </div>
      <div class="text">
        <h3>Christoffer Bogsti</h3>
        <h6>Designer & Utvikler</h6>
      </div>
    </section>
  </div>
</template>

<script>
import Chromata from '../utils/chromata/chromata.js'

export default {
  data () {
    return {
      chromata: null
    }
  },
  mounted () {
    const winWidth = window.innerWidth
    const image = this.$refs.img

    if (winWidth < 900) {
      this.chromata = new Chromata(image, {
        colorMode: 'greyscale',
        compositeOperation: 'lighten',
        iterationLimit: 0,
        key: 'high',
        lineWidth: 1,
        lineMode: 'square',
        origin: ['bottom'],
        outputSize: 'original',
        pathFinderCount: 16,
        speed: 3,
        turningAngle: Math.PI * 2
      })
      this.chromata.start()
    }

    if (winWidth > 900) {
      this.chromata = new Chromata(image, {
        colorMode: 'greyscale',
        compositeOperation: 'lighten',
        iterationLimit: 0,
        key: 'high',
        lineWidth: 1,
        lineMode: 'square',
        origin: ['bottom'],
        outputSize: 'original',
        pathFinderCount: 70,
        speed: 3,
        turningAngle: Math.PI * 2
      })
      this.chromata.start()
    }
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

    .intro-container {
      flex-direction: column;
      height: 100%;
      width: 100%;

      .logo {
        align-items: center;
        display: flex;
        height: 90%;
        justify-content: center;
        img, canvas {
          position: relative;
          width: 16rem;
          @media (min-width: 900px) {
            width: 20rem;
          }
        }
      }

      .text {
        bottom: 2.3rem;
        margin: .8rem;
        padding-left: 2rem;
        position: absolute;
        h3,h6 {
          margin: 0rem;
        }
        h3 {

        }
        h6 {
          font-weight: 400;
        }
      }
    }
  }
</style>
