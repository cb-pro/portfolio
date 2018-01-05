<template lang="html">
  <div class="busemannen">
    <section class="text-container" :class="{ hidden: this.$store.state.hideText }">
      <div class="text-flex">
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

    .text-container {
      background: hsla(0,0%,0%,1);
      bottom: -10rem;
      display: flex;
      // display: none;
      flex-direction: column;
      justify-content: flex-start;
      position: fixed;
      top: -10rem;
      width: 100%;
      transition: .5s ease-in-out;

      .text-flex {
        // border: 1px dashed red;
        padding: 0 3rem;
        margin-top: 35%;

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

    .images {
      margin: 0px auto;
      padding: 0px;
      line-height: 0;
      width: 90%;
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
