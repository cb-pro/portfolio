<template lang="html">
  <div class="about">
    <h1>ABOUT</h1>
    <div v-html="this.vuexAboutContent" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      vuexAboutContent: this.$store.state.data[1].about.content
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .about {
    font-family: $primary-font;
  }
</style>
