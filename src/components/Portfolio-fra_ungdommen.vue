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

    <section class="images-flex">
      <div class="images-container">
        <div>
        <img src="../../static/img/portfolio/fra_ung_00-head.jpg" alt="">
        </div>
        <div>
        <video controls poster="../../static/video/fra-ungdommen-thumb.jpg">
          <source src="../../static/video/fra-ungdommen-video.mp4" type="video/mp4" />
        </video>
          <!-- <iframe width="100%" src="https://www.youtube.com/embed/tCrSX4sGp4o?autoplay=0&autohide=2&border=0&wmode=opaque&enablejsapi=1&modestbranding=0&controls=2&showinfo=0&rel=0&amp;" frameborder="0" allowfullscreen></iframe> -->
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_01.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_02.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_03.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_04.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_05.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_06.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_07.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_08.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_09.jpg" alt="" style="border: .1rem solid grey">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_10.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_11.jpg" alt="" style="border: .1rem solid grey">
        </div>
        <div>
          <img src="../../static/img/portfolio/fra_ung_12.jpg" alt="" style="border: .1rem solid grey">
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



  .fra-ungdommen {
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
        padding: 3rem;
        width: 100%;

        h1 {
          // border: 1px dashed red;
          color: #008FD6;
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
          video {
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
