<template lang="html">
  <div class="ullernklinikken">

    <section class="text-flex">
      <div class="text-container">
        <h1>Ullernklinikken</h1>
        <h4>
          Webapplikasjon for Ullernklinikken.no <br />
          Frilans oppdrag
        </h4>
        <p>
          Ullernklinikken er en liten klinikk som ligger i Ullern Allé i Oslo. Klinikken består av manuellterapauter som er eksperter på behandling av muskel- og skjelettsykdommer. Fra idrettsutøvere til vanlige folk, alle er velkommne.
        </p>
        <hr />
        <img class="my-logos" src="../../static/gfx/logos/bogsti-logo-fill.svg" alt="">
      </div>
    </section>

    <div class="extended-background"></div>

    <section class="images-flex">
      <div class="images-container">
        <div>
          <img src="../../static/img/portfolio/ullernklinikken-head.jpg" alt="Skjermvisning av prosjektet på desktop og mobil">
        </div>
        <div>
          <img src="../../static/img/portfolio/ullernklinikken-home-Low.jpg" alt="Bilde av startsiden">
        </div>
        <div>
          <img src="../../static/img/portfolio/ullernklinikken-order-ow.jpg" alt="Bilde av timebestilling etter å ha trykket Bestill time">
        </div>
        <div>
          <img src="../../static/img/portfolio/ullernklinikken-info-low.jpg" alt="Bilde av info siden">
        </div>
        <div>
          <img src="../../static/img/portfolio/ullernklinikken-employees-low.jpg" alt="Bilde av ansatte siden">
        </div>
        <div>
          <img src="../../static/img/portfolio/ullernklinikken-contact-low.jpg" alt="Bilde av kotakt siden">
        </div>
        <div>
          <img src="../../static/img/portfolio/ullernklinikken-ipad.jpg" alt="Bilde av startsiden på tablet">
        </div>
      </div>
    </section>

    <nav class="next-project-container">
      <div class="next-project-btn" @click="redirectTo">
        <p>Tilbake til Portfolio</p>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  methods: {
    redirectTo () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';


  .ullernklinikken {
    // background: grey;
    font-family: helvetica, arial, sans-serif;
    margin: 0;
    padding: 0;

    .hidden {
      opacity: 0;
      visibility: hidden;
      transition: .5s ease-in-out;
    }

    .text-flex {
      // border: 1px dashed red;
      bottom: 0rem;
      display: flex;
      justify-content: center;
      position: fixed;
      top: 0rem;
      width: 100%;
      transition: .5s ease-in-out;
      z-index: 0;

      .text-container {
        // border: 1px dashed red;
        padding: 3rem 3rem;
        @media (min-width: 900px) {
          padding: 3rem 6rem;
        }

        h1 {
          // border: 1px dashed red;
          color: #009c8a;
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

    // .extended-background {
    //   background: hsla(50,0%,50%,1);
    //   bottom: 20rem;
    //   position: absolute;
    //   top: 20rem;
    //   // height: 100%;
    //   transition: .5s ease-in-out;
    //   width: 100%;
    // }


    .images-flex {
      height: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
      transform: translateY(100%);
      width: 100%;
      .images-container {
        // border-top: .1rem solid grey;
        line-height: 0;
        width: 100%;

        div {
          background: #fff;
          // border: 2px solid lime;
          padding: 2rem 3rem;
          @media (min-width: 900px) {
            // padding: 2rem 0rem;
          }
          &:last-child {
            margin-bottom: 9rem;
          }
          img {
            // box-shadow: 0 .5rem 1.6rem #e6e4e4;
            border-bottom: .1rem solid grey;
            width: 100%;
            @media (min-width: 900px) {
              margin-left: 50%;
              transform: translateX(-50%);
              width: 50%
            }
          }
        }
      }
    }

    .next-project-container {
      bottom: 3rem;
      left: 3rem;
      position: fixed;
      z-index: 5;
      @media (min-width: 900px) {
        left: 6rem;
      }
      .next-project-btn {
        background: hsla(0,0%,100%,.2);
        align-items: center;
        border: 1px solid grey;
        border-radius: 50rem;
        display: flex;
        height: 4.5rem;
        justify-content: center;
        width: 17rem;
        &:active {
          transform: scale(.95);
          transform-origin: center;
        }
        &:hover {
          background: grey;
          cursor: pointer;
          p {
            color: #fff;
          }
        }
        p {
          color: grey;
          font-size: 1.6rem;
          margin: 0;
          text-decoration: none;
        }
      }
    }
  }

</style>
