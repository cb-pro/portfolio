<template lang="html">
  <div class="minvoice">
    <section class="text-container" :class="{ hidden: this.$store.state.hideText }">
      <div class="text-flex">
        <h1>mInvoice<sup style="font-size:1rem">®</sup></h1>
        <h4>
          App design for minvoice<sup>®</sup> <br />
          Samarbeid med Sigurd Finseth / IUX
        </h4>
        <p>
          mInvoice er neste generasjons serviceplattform. Som forbruker får du total kontroll over alle dine tjenesteleverandører. Motta og betal alle dine fakturaer både i app og på web.
        </p>
        <hr />
        <img class="my-logos" src="../../static/gfx/logos/iux-sm-logo.svg" alt="">
      </div>
    </section>
    <section class="images">
      <img src="../../static/img/portfolio/minvoice-head-tall.jpg" alt="">
      <img src="../../static/img/portfolio/minvoice_01.jpg" alt="">
      <img src="../../static/img/portfolio/minvoice_02.jpg" alt="">
      <img src="../../static/img/portfolio/minvoice_03.jpg" alt="">
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .minvoice {
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
          color: #BB1C00;
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
          height: 3.5rem;
          margin-top: .6rem;
          transform: translatex(.3rem);
        }
      }
    }

    .images {
      margin: 0px auto;
      padding: 0;
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
