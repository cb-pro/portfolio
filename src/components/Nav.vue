<template lang="html">
  <div class="nav">

    <NavWindow class="NavWindow" :class="{showNavWindow: showNav}" />

    <section class="nav-btn-flex">
      <div class="nav-btn-container">
        <div class="nav-btn" @click="toggleNavBtn">
          <img class="nav-btn-menu-icon" src="../../static/gfx/ui/menu-lines.svg" v-if="this.$store.state.showNav === false" alt="">
          <img class="nav-btn-menu-icon" src="../../static/gfx/ui/menu-close.svg" v-if="this.$store.state.showNav === true" alt="">
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
      transition: .2s ease-in-out;
      z-index: -1;
    }
    .showNavWindow {
      visibility: visible;
      opacity: 1;
      transition: .2s ease-in-out;
      z-index: 8;
    }

    .nav-btn-flex {
      bottom: 3rem;
      position: fixed;
      right: 3rem;
      z-index: 9;
      .nav-btn-container {
        .nav-btn {
          align-items: center;
          background: grey;
          border-radius: 50%;
          display: flex;
          height: 4.5rem;
          justify-content: center;
          width: 4.5rem;
          &:hover {
            @media (min-width: 900px) {
              background: lightgrey;
            }
          }
          &:active {
            transform: scale(.95);
          }
          .nav-btn-menu-icon {
            height: 1.5rem;
          }
        }
      }
    }
  }

</style>
