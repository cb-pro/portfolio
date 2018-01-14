<template lang="html">
  <div class="minvoice">
    <section class="text-flex" :class="{ hidden: this.$store.state.toggleText }">
      <div class="text-container">
        <h1>mInvoice<sup style="font-size:1rem">®</sup></h1>
        <h4>
          App design for minvoice<sup style="font-size:.5rem">®</sup> <br />
          Samarbeid med Sigurd Finseth / IUX
        </h4>
        <p>
          mInvoice er neste generasjons serviceplattform. Som forbruker får du total kontroll over alle dine tjenesteleverandører. Motta og betal alle dine fakturaer både i app og på web.
        </p>
        <hr />
        <img class="my-logos" src="../../static/gfx/logos/iux-sm-logo.svg" alt="">
      </div>
    </section>
    <section class="images-flex">
      <div class="images-container">
        <div>
          <img src="../../static/img/portfolio/minvoice-head-tall.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/minvoice_01.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/minvoice_02.jpg" alt="">
        </div>
        <div>
          <img src="../../static/img/portfolio/minvoice_03.jpg" alt="">
        </div>
      </div>
    </section>

    <nav class="next-project-container">
      <div class="next-project-btn">
        <router-link to="/portfolio/fra-ungdommen">Neste Prosjekt</router-link>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';


  .minvoice {
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
      // background: hsla(0,50%,50%,.4);
      // border: 1px dashed red;
      bottom: 0rem;
      display: flex;
      justify-content: center;
      position: fixed;
      top: 0rem;
      width: 100%;
      transition: .5s ease-in-out;
      z-index: 0;
      @media (min-width:900px) {
        align-items: center;
        transform: translateY(-12.5%);
      }

      .text-container {
        // border: 1px dashed red;
        max-width: $max-width;
        padding: 3rem;

        h1 {
          // border: 1px dashed red;
          color: #BB1C00;
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
          height: 3.5rem;
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
        line-height: 0;
        max-width: $max-width;

        div {
          background: #fff;
          // border: 2px solid lime;
          padding: 2rem 3rem;
          @media (min-width: 900px) {
            padding: 2rem 0rem;
          }
          &:last-child {
            margin-bottom: 9rem;
          }
          img {
            box-shadow: 0 .5rem 1.6rem #e6e4e4;
            width: 100%;
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
        width: 14rem;
        &:active {
          transform: scale(.95);
          transform-origin: center;
        }
        &:hover {
          background: grey;
          cursor: pointer;
          a {
            color: #fff;
          }
        }
        a {
          color: grey;
          font-size: 1.6rem;
          margin: 0;
          text-decoration: none;
        }
      }
    }
  }

</style>
