<template lang="html">
  <div class="nav">

    <NavWindow class="NavWindow" :class="{showNavWindow: showNav}" />

    <section class="nav-btn-flex">
      <div class="nav-btn-container">
        <div class="nav-btn" @click="toggleNavBtn">
          <img class="nav-btn-menu-icon" src="../../static/gfx/ui/menu-icon.svg" alt="">
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import NavWindow from './Nav-window.vue'

export default {
  components: {
    'NavWindow': NavWindow
  },
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
    toggleNavBtn () {
      this.$store.dispatch('toggleNav')
    }
  }
}
</script>

<style lang="scss">

  .nav {
    .NavWindow {
      visibility: hidden;
      opacity: 0;
      transition: .4s ease-in-out;
      z-index: -1;
    }
    .showNavWindow {
      visibility: visible;
      opacity: 1;
      transition: .5s ease-in-out;
      z-index: 8;
    }

    .nav-btn-flex {
      bottom: 3rem;
      position: fixed;
      right: 3rem;
      z-index: 9;
      .nav-btn-container {
        .nav-btn {
          background: grey;
          border-radius: 50%;
          height: 45px;
          width: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          .nav-btn-menu-icon {
            height: 2rem;
          }
        }
      }
    }
  }

</style>
