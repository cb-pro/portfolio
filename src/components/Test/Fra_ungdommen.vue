<template lang="html">
  <div class="fra-ungdommen">
    <section class="text-container">
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
      </div>
    </section>
    <section class="images">
      <img src="../../../static/img/test/busemannen-illustrasjon-retouch.jpg" alt="">
      <img src="../../../static/img/test/busemannen-ylvis_01.jpg" alt="">
      <img src="../../../static/img/test/busemannen-ylvis_02.jpg" alt="">
      <img src="../../../static/img/test/busemannen-ylvis_03.jpg" alt="">
      <img src="../../../static/img/test/busemannen-skeleton.jpg" alt="">
    </section>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .fra-ungdommen {
    // padding: 0 15px;
    font-family: helvetica, arial, sans-serif;
    margin: 0;
    padding: 0;

    .text-container {
      background: hsla(0,0%,0%,.7);
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
          color: red;
          font-size: 2em;
        }
        h4 {
          color: yellow;
        }
        p {
          color: white;
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
