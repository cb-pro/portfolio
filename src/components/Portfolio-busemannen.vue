<template lang="html">
  <div class="busemannen">

    <section class="text-flex">
      <div class="text-container">
        <h1>Busemannen</h1>
        <h4>
          Bokomslag for Cappelen Damm <br />
          Samarbeid med Bente C. Bergan
        </h4>
        <p>
          Knut Nærum og fire av forfatterne bak Nytt på nytt har rottet seg sammen om en saftig parodi på Jo Nesbøs Harry Hole-bøker. Helten er mer sliten, Oslo er råtnere og volden er nesten like drøy.
        </p>
        <hr />
        <img class="my-logos" src="../../static/gfx/logos/cada-logo.svg" alt="">
      </div>
    </section>

    <div class="extended-background"></div>

    <section class="images-flex">
      <div class="images-container">
        <div>
          <img src="../../static/img/portfolio/busemannen-illustrasjon-retouch.jpg" alt="" style="width:100%;">
        </div>
        <div>
          <img src="../../static/img/portfolio/busemannen-ylvis_01.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/busemannen-ylvis_02.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/busemannen-ylvis_03.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/busemannen-skeleton.jpg" alt="">
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


  .busemannen {
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
      z-index: 1;

      .text-container {
        // border: 1px dashed red;
        padding: 3rem;

        h1 {
          // border: 1px dashed red;
          color: red;
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
          width: 99%;
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
      width: 100%;
    }


    .images-flex {
      height: 100%;
      display: flex;
      justify-content: center;
      position: absolute;
      transform: translateY(100%);
      width: 100%;
      z-index: 6;
      .images-container {
        // border-top: .1rem solid grey;
        line-height: 0;
        width: 100%;

        div {
          background: #000;
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
        }
      }
    }

    .next-project-container {
      bottom: 3rem;
      left: 3rem;
      position: fixed;
      z-index: 6;
      .next-project-btn {
        background: hsla(0,0%,0%,.2);
        align-items: center;
        border: .2rem solid lightgrey;
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
          background: lightgrey;
          cursor: pointer;
          p {
            color: #242323;
          }
        }
        p {
          color: lightgrey;
          font-size: 1.6rem;
          margin: 0;
          text-decoration: none;
        }
      }
    }
  }




</style>
