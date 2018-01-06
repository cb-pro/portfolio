<template lang="html">
  <div class="portfolio">

    <transition name="portfolio-fade">
    <compUllernklinikken class="pro ullernklinikken" v-if="index === 1" />
    </transition>
    <transition name="portfolio-fade">
    <compMinvoice class="pro minvoice" v-if="index === 2" />
    </transition>
    <transition name="portfolio-fade">
    <compFraUngdommen class="pro fra-ungdommen" v-if="index === 3" />
    </transition>
    <transition name="portfolio-fade">
    <compBusemannen class="pro busemannen" v-if="index === 4" />
    </transition>

    <!-- <img class="scroll-down" src="../../static/gfx/ui/scroll-down.svg" alt=""> -->

    <nav class="nav-buttons">
      <div class="prev-btn" @click="prevProject">
        <img class="projects-btn-prev" src="../../static/gfx/ui/previous-project.svg" alt="">
      </div>
      <div class="next-btn" @click="nextProject">
        <img class="projects-btn-next" src="../../static/gfx/ui/next-project.svg" alt="">
      </div>
      <div class="text" @click="hideText">
        <img class="projects-btn-text" src="../../static/gfx/ui/text.svg" alt="">
      </div>
    </nav>

  </div>
</template>

<script>
import Ullernklinikken from '../components/Portfolio-ullernklinikken.vue'
import Minvoice from '../components/Portfolio-minvoice.vue'
import FraUngdommen from '../components/Portfolio-fra_ungdommen.vue'
import Busemannen from '../components/Portfolio-busemannen.vue'

export default {
  components: {
    'compUllernklinikken': Ullernklinikken,
    'compMinvoice': Minvoice,
    'compFraUngdommen': FraUngdommen,
    'compBusemannen': Busemannen
  },
  data () {
    return {
      index: 1,
      projects: 4
    }
  },
  mounted () {
    // invokes activateListen in methods
    this.activateListen()

    // hiding text when scrolling
    window.addEventListener('scroll', () => {
      if (this.$store.state.listenToScroll) {
        this.$store.state.listenToScroll = false
        console.log('listenToScroll is disabled')
        this.$store.state.hideText = true
      }
    })
  },
  methods: {
    // makes it possible to hideText with scrolling
    // 1 second delay for smoother experience
    activateListen () {
      setTimeout(() => {
        this.$store.state.listenToScroll = true
        console.log('listenToScroll is active')
      }, 1000)
    },
    // Previous Project Button
    prevProject () {
      if (this.index > 1) {
        this.index -= 1
        this.$store.state.hideText = false
        this.activateListen()
      }
    },
    // Next Project Button
    nextProject () {
      if (this.index < this.projects) {
        this.index += 1
        this.$store.state.hideText = false
        this.activateListen()
      }
    },
    // Hide Text Button
    hideText () {
      this.$store.state.hideText = !this.$store.state.hideText
      this.activateListen()
    }
  }
}
</script>

<style lang="scss" scoped>
  .portfolio-fade-enter-active {
    transition: all .5s ease-in-out;
    transition-delay: 1s;

  }
  .portfolio-fade-leave-active {
    // transition-delay: .5s;
    transition: all .5s ease-in-out;

  }
  .portfolio-fade-enter, .portfolio-fade-leave-to {
    opacity: 0;
    // visibility: hidden;
    // transition-delay: 2.5s;
  }

  .portfolio{

    .pro {
      position: absolute;
    }

    .ullernklinikken {
      width: 100%;
    }

    .minvoice {
      width: 100%;
    }

    .fra-ungdommen {
      width: 100%;
    }

    .busemannen {
      width: 100%;
    }

    // SCROLL DOWN
    // .scroll-down {
    //   bottom: 11rem;
    //   height: 8rem;
    //   position: absolute;
    //   right: 3rem;
    //   transform: translateX(-.85rem);
    // }

    //NAV
    .nav-buttons {
      // border: 1px dashed red;
      bottom: 30px;
      display: flex;
      flex-direction: row;
      line-height: 0;
      padding-left: 30px;
      position: fixed;
      div {
        align-items: center;
        background: grey;
        border-radius: 50%;
        display: flex;
        // flex-direction: column;
        justify-content: center;
        height: 45px;
        margin-right: 10px;
        width: 45px;

        img {
          height: 2.5rem;
        }
      }
      .projects-btn-prev {
        transform: translateX(-.2rem);
      }
      .projects-btn-next {
        transform: translateX(.2rem);
      }
      .projects-btn-text {
        height: 1.5rem;
        // transform: translateX(-.2rem);
      }
    }

  }
</style>
