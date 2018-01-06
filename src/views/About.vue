<template lang="html">
  <div class="about">
    <section class="about-text-container">
      <h1>Hei</h1>
      <div v-html="this.vuexAboutContent" />
    </section>
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
    .about-text-container {
      font-family: $primary-font;
      margin: 0 auto;
      padding-top: 6%;
      width: 83%;

      div {
        margin-top: -1rem;
      }
    }
  }
</style>
