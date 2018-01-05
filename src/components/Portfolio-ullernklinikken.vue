<template lang="html">
  <div class="ullernklinikken">
    <section class="text-container" :class="{ hidden: this.$store.state.hideText }">
      <div class="text-flex">
        <h1>Ullernklinikken</h1>
        <h4>
          Webapplikasjon for Ullernklinikken.no <br />
          Frilans oppdrag.
        </h4>
        <p>
          Ullernklinikken er en liten klinikk som ligger i Ullern Allé i Oslo. Klinikken består av manuellterapauter som er eksperter på behandling av muskel- og skjelettsykdommer. Fra idrettsutøvere til vanlige folk, alle er velkommne.
        </p>
        <hr />
        <img class="my-logos" src="../../static/gfx/logos/bogsti-logo-fill.svg" alt="">
      </div>
    </section>
    <section class="images">
      <img src="../../static/img/portfolio/ullernklinikken-home-Low.jpg" alt="">
      <img src="../../static/img/portfolio/ullernklinikken-order-ow.jpg" alt="">
      <img src="../../static/img/portfolio/ullernklinikken-info-low.jpg" alt="">
      <img src="../../static/img/portfolio/ullernklinikken-employees-low.jpg" alt="">
      <img src="../../static/img/portfolio/ullernklinikken-contact-low.jpg" alt="">
      <img src="../../static/img/portfolio/ullernklinikken-ipad-low.jpg" alt="">
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .ullernklinikken {
    font-family: helvetica, arial, sans-serif;
    margin: 0;
    padding: 0;

    .hidden {
      opacity: 0;
      visibility: hidden;
      transition: .5s ease-in-out;
    }

    .text-container {
      background: hsla(0,0%,100%,1);
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
          color: #009c8a;
          // font-size: 2em;
        }
        h4 {
          color: #2f2f2f;
          font-weight: 300;
          margin-top: -1.5rem;
        }
        p {
          color: #000;
          margin-top: -.6rem;
        }
        hr {
          width: 100%;
        }
        .my-logos {
          // border: 1px dashed red;
          height: 6rem;
          margin-top: .6rem;
          transform: translatex(.3rem);
        }
      }
    }

    .images {
      line-height: 0;
      margin: 0px auto;
      padding: 0px;
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
