<template lang="html">
  <div class="home-id-one">
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
    color: #303030
  }

</style>
