<template lang="html">
  <div class="home-id-one">
    <div class="bg"></div>
    <h1>Identitet</h1>
    <div v-html="this.controller.importedContent" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      controller: {
        importedContent: this.$store.state.content
      }
    }
  },
  created () {
    // console.log(this.$store.state.content)
  }
}
</script>

<style lang="scss" scoped>
  .home-id-one {
    font-family: helvetica, arial, sans-serif;
    color: #303030;

    .bg {
      // background: red;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1
    }
  }

</style>
