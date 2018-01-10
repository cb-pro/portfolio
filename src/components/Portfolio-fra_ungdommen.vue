<template lang="html">
  <div class="fra-ungdommen">
    <section class="text-flex" :class="{ hidden: this.$store.state.toggleText }">
      <div class="text-container">
        <h1>Fra Ungdommen</h1>
        <h4>
          Ebok for Cappelen Damm <br/>
          Vinner av Årets vakreste Ebok 2015
        </h4>
        <p>
          Dette er den digitale utgaven av boka Fra Ungdommen. Boken er bygd opp med enkel navigering og man kan velge om man vil lese i kronologisk rekkefølge eller hoppe fra kapittel til kapittel. I den digitale utgaven er det også video som er knyttet til hver ungdomsprofil.
        </p>
        <hr />
        <img class="my-logos" src="../../static/gfx/logos/cada-black-logo.svg" alt="" />
        <img class="my-logos grafill-logo" src="../../static/gfx/logos/grafill-logo.svg" alt="" />
        <!-- <img class="my-logos" src="../../static/gfx/logos/aarets_boeker-logo.svg" alt=""> -->
      </div>
    </section>

    <div class="extended-background" :class="{ hidden: this.$store.state.toggleText }"></div>

    <section class="images">
      <img src="../../static/img/portfolio/fra_ung_00-head.jpg" alt="">

      <video width="100%" controls poster="../../static/video/fra-ungdommen-thumb.jpg">
        <source src="../../static/video/fra-ungdommen-video.mp4" type="video/mp4" />
      </video>
      <!-- <iframe width="100%" src="https://www.youtube.com/embed/tCrSX4sGp4o?autoplay=0&autohide=2&border=0&wmode=opaque&enablejsapi=1&modestbranding=0&controls=2&showinfo=0&rel=0&amp;" frameborder="0" allowfullscreen></iframe> -->
      <img src="../../static/img/portfolio/fra_ung_01.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_02.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_03.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_04.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_05.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_06.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_07.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_08.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_09.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_10.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_11.jpg" alt="">
      <img src="../../static/img/portfolio/fra_ung_12.jpg" alt="">
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .fra-ungdommen {
    font-family: helvetica, arial, sans-serif;
    margin: 0;
    padding: 0;

    .hidden {
      opacity: 0;
      visibility: hidden;
      transition: .5s ease-in-out;
    }

    .text-flex {
      background: hsla(0,0%,100%,1);
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
          color: #008FD6;
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
          height: 4rem;
          margin-top: .6rem;
          margin-right: 1.3rem;
          transform: translatex(.3rem);
          vertical-align: middle;
        }
        .grafill-logo {
          height: 3.3rem;
        }
      }
    }

    .extended-background {
      background: hsla(0,0%,100%,1);
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
      video {
        margin: 2rem 0 2rem 0;
        // position: relative;
        // z-index: -1;
        // width: 100%;
      }
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
