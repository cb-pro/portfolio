<template lang="html">
  <div class="test-container">
    <div class="pro-container">

      <FraUngdommen />

    </div>

    <nav class="navbar">
      <div class="button button-one"></div>
      <div class="button button-two"></div>
      <div class="button button-two"></div>
      <div class="button button-three"></div>
    </nav>
  </div>
</template>

<script>
import FraUngdommen from '../components/Test/Fra_ungdommen.vue'

export default {
  components: {
    'FraUngdommen': FraUngdommen
  }
}
</script>

<style lang="scss" scoped>
  .test-container {

    .pro-container {
    }
    .navbar {
      box-sizing: border-box;
      // border: 1px dashed red;
      bottom: 30px;
      padding: 0 25px;
      position: fixed;
      width: 100%;

      .button {
        background: grey;
        // border: 1px dashed red;
        border-radius: 50px;
        box-sizing: border-box;
        display: inline-block;
        height: 45px;
        margin: 0 5px;
        width: 45px;
      }
      .button-three {
        // background: red;
        position: absolute;
        right: 25px;
      }
    }
  }

</style>
