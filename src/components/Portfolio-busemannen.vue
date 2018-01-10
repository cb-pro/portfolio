<template lang="html">
  <div class="busemannen">
    <section class="text-flex" :class="{ hidden: this.$store.state.toggleText }">
      <div class="text-container">

        <h1>Busemannen</h1>
        <h4>
          Bokomslag for Cappelen Damm. <br />
          Samarbeid med Bente C. Bergan.
        </h4>
        <p>
          Knut Nærum og fire av forfatterne bak Nytt på nytt har rottet seg sammen om en saftig parodi på Jo Nesbøs Harry Hole-bøker. Helten er mer sliten, Oslo er råtnere og volden er nesten like drøy.
        </p>
        <hr />
        <img class="my-logos" src="../../static/gfx/logos/cada-logo.svg" alt="">
      </div>
    </section>

    <div class="extended-background" :class="{ hidden: this.$store.state.toggleText }"></div>

    <section class="images">
      <img src="../../static/img/portfolio/busemannen-illustrasjon-retouch.jpg" alt="">
      <img src="../../static/img/portfolio/busemannen-ylvis_01.jpg" alt="">
      <img src="../../static/img/portfolio/busemannen-ylvis_02.jpg" alt="">
      <img src="../../static/img/portfolio/busemannen-ylvis_03.jpg" alt="">
      <img src="../../static/img/portfolio/busemannen-skeleton.jpg" alt="">
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .busemannen {
    font-family: helvetica, arial, sans-serif;
    margin: 0;
    padding: 0;

    .hidden {
      opacity: 0;
      visibility: hidden;
      transition: .5s ease-in-out;
    }

    .text-flex {
      // background: hsla(0,0%,0%,1);
      // border: 1px dashed red;
      bottom: 0rem;
      display: flex;
      justify-content: center;
      position: fixed;
      top: 0rem;
      width: 100%;
      transition: .5s ease-in-out;
      z-index: 5;

      .text-container {
        // border: 1px dashed red;
        padding: 3rem;

        h1 {
          // border: 1px dashed red;
          color: red;
          // font-size: 2em;
        }
        h4 {
          color: yellow;
          margin-top: -1.5rem;
        }
        p {
          color: white;
          margin-top: -.6rem;
        }
        hr {
          width: 100%;
        }
        .my-logos {
          // border: 1px dashed red;
          height: 4rem;
          margin-top: 1rem;
          transform: translatex(.3rem);
        }
      }
    }

    .extended-background {
      background: hsla(0,0%,0%,1);
      bottom: -20rem;
      position: fixed;
      top: -20rem;
      transition: .5s ease-in-out;
      width: 100%;
    }

    .images {
      margin: 0px auto;
      padding: 0px;
      line-height: 0;
      width: 83%;
      img {
        box-shadow: .6rem .9rem .9rem #d9d9d9;
        margin: 2rem 0;
        padding: 0px;
        width: 100%;
      }
      img:first-child {
        margin: 4rem 0 2rem 0;
      }
      img:last-child {
        margin: 2rem 0 11rem 0;
      }
    }
  }

</style>
