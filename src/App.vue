<template lang="html">
  <div class="app">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import dataJSON from './data/data.json'
import Nav from './components/Nav.vue'

export default {
  components: {
    'Nav': Nav
  },
  created () {
    this.importData()
  },
  methods: {
    importData: function () {
      this.$store.state.data = dataJSON
    }
  },
  watch: {
    '$store.state.showNav' () {
      if (this.$store.state.showNav) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'visible'
      }
    }
  }
}
</script>

<style lang="scss">
  html {font-size: 62.5%;
    @media (min-width: 768px) and (max-width: 899px) {font-size: 80%;}
    @media (min-width: 900px) and (max-width: 1099px) {font-size: 90%;}
    @media (min-width: 1100px) and (max-width: 1399px) {font-size: 100%;}
    @media (min-width: 1400px) {font-size: 115%;}

    @media (min-width: 900px) and (max-height: 700px) {font-size: 90%;}
  }


  h1 {font-size: 3.3rem;}  // TITLE
  h2 {font-size: 2.9rem;}  // ALT TITLE
  h3 {font-size: 2.1rem;}
  h4 {font-size: 1.7rem;}  // INGRESS
  h5 {font-size: 1.9rem;
    @media (min-width: 900px) {font-size: 1.6rem;}
  }
  h6 {font-size: 1.6rem;
    @media (min-width: 900px) {font-size: .9rem!important;}
  }
  p {font-size: 1.65rem;
    @media (min-width: 900px) {font-size: 1.3rem;}
  }   // BODY TEXT

  h1,h2,h3,h4,h5,h6,p {margin-top: 0rem;}

  body {
    margin: 0;
    overflow-x: hidden;
  }

  .app.hidden {
    overflow: hidden;
  }
</style>
