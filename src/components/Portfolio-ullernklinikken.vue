<template lang="html">
  <div class="ullernklinikken">
    <section class="text-container">
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
      </div>
    </section>
    <section class="images">
      <img src="../../static/img/test/busemannen-illustrasjon-retouch.jpg" alt="">
      <img src="../../static/img/test/busemannen-ylvis_01.jpg" alt="">
      <img src="../../static/img/test/busemannen-ylvis_02.jpg" alt="">
      <img src="../../static/img/test/busemannen-ylvis_03.jpg" alt="">
      <img src="../../static/img/test/busemannen-skeleton.jpg" alt="">
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .ullernklinikken {
    // padding: 0 15px;
    font-family: helvetica, arial, sans-serif;
    margin: 0;
    padding: 0;

    .text-container {
      background: hsla(0,0%,100%,.9);
      bottom: -100px;
      display: flex;
      // display: none;
      flex-direction: column;
      justify-content: center;
      position: fixed;
      top: -100px;
      .text-flex {
        // border: 1px dashed red;
        padding: 0 30px;
        margin-top: -40%;

        h1 {
          // border: 1px dashed red;
          color: #009c8a;
          font-size: 2em;
        }
        h4 {
          color: #2f2f2f;
        }
        p {
          color: #000;
        }
        hr {
          width: 100%;
        }
      }
    }

    .images {
      margin: 0px;
      padding: 0px;
      line-height: 0;
      img {
        width: 100%;
        margin: 0px;
        padding: 0px;
      }
    }
  }

</style>
