<template lang="html">
  <div class="nav-window">
    <div class="nav-flex">
      <div class="nav-container">

        <section class="nav-breadcrumbs-flex">
          <div class="nav-breadcrumbs-container">
            <h1>{{ this.$store.state.breadcrumbsMain }}</h1>
          </div>
        </section>

        <hr />

        <section class="nav-links-flex">
          <div class="nav-links-container">
            <h2>Navigasjon</h2>
            <!-- <router-link to="/identitet"><h3 @click="toggleNavBtn('Identitet')">Identitet</h3></router-link> -->
            <router-link to="/portfolio"><h3 @click="toggleNavBtn('Portfolio')">Portfolio</h3></router-link>
            <router-link to="/om-meg"><h3 @click="toggleNavBtn('Om meg')">Om meg</h3></router-link>
            <h3 style="color:lightgrey;border-bottom:none;">Blog (kommer)</h3>
          </div>
        </section>

        <hr />

        <section class="nav-kontakt-flex">
          <div class="nav-kontakt-container">
            <h2>Kontakt</h2>
            <p>Epost: post@christofferbogsti.com</p>
            <p>Tlf: 936 77 156</p>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showNav () {
      return this.$store.getters.showNav
    }
  },
  data () {
    return {
      //
    }
  },
  methods: {
    toggleNavBtn (e) {
      this.$store.dispatch('toggleNav')
      setTimeout(() => {
        this.$store.state.breadcrumbsMain = e
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/main.scss';

  .nav-window {
    background: #fafafa;
    bottom: 0;
    font-family: $primary-font;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 8;
    .nav-flex {
      // border: 1px dashed red;
      display: flex;
      justify-content: center;
      .nav-container {
        // border: 1px dashed red;
        // max-width: 900px;
        padding: 3rem 3rem;
        width: 100%;
        @media (min-width: 900px) {
          padding: 3rem 6rem;
        }
      }
    }
  }

  .nav-breadcrumbs-flex {
    // border: 1px dashed red;
    .nav-breadcrumbs-container {

    }
  }

  .nav-links-flex {
    // border: 1px dashed red;
    .nav-links-container {
      h3 {
        border-bottom: 1px solid #000;
        display: table;
        transition: .2s ease-in-out;
        color: grey;
      }
      a {
        color: grey;
        text-decoration: none;
        :hover, :active {
          border-bottom: 8px solid red;
          color: red;
          transition: .2s ease-in-out;
        }
      }
    }
  }

  .nav-kontakt-flex {
    // border: 1px dashed red;
    .nav-kontakt-container {
      h2 {
        margin-bottom: 1.2rem;
      }
      p {
        margin-bottom: .5rem;
      }
    }
  }

</style>
