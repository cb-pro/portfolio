<template lang="html">
  <div class="kollektivbryggeriet">
    <section class="text-flex" :class="{ hidden: this.$store.state.toggleText }">
      <div class="text-container">
        <h1>Kollektivbryggeriet</h1>
        <h4>
          Identitet og visuell profil <br />
          Frilans oppdrag
        </h4>
        <p>
          Kollektivbryggeriet er et lite mikrobryggeri som holder til sentralt i Oslo. De er oppatt av det gode liv og brygger med stor tålmodighet for å oppnå ypperste kvalitet.
        </p>
        <hr />
        <img class="my-logos" src="../../static/gfx/logos/bogsti-logo-fill.svg" alt="" />
        <Scrolldown class="scrolldown" />
      </div>
    </section>

    <div class="extended-background" :class="{ hidden: this.$store.state.toggleText }"></div>

    <section class="images-flex">
      <div class="images-container">
        <div>
        <img src="../../static/img/portfolio/kb-head.jpg" alt="" style="border-bottom: .1rem solid grey;">
        </div>
        <div>
          <img src="../../static/img/portfolio/kb-01.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/kb-02.svg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/kb-03.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/kb-04.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/kb-06.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/kb-07.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/kb-08.jpg" alt="" style="border-bottom: .1rem solid grey;">
        </div>
        <div>
          <img src="../../static/img/portfolio/kb-09.jpg" alt="">
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
import Scrolldown from './Animations/Scrolldown.vue'

export default {
  components: {
    'Scrolldown': Scrolldown
  },
  methods: {
    redirectTo () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';



  .kollektivbryggeriet {
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
        width: 100%;
        @media (min-width: 900px) {
          padding: 3rem 6rem;
        }

        h1 {
          // border: 1px dashed red;
          color: #947e59;
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
        .scrolldown {
          float: right;
          padding: .6rem 1rem 0 0;
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
      transform: translateY(105%);
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
            // border-bottom: .1rem solid grey;
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
