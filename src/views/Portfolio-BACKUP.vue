<template lang="html">
  <div class="portfolio">

    <!-- PROJECTS COMPONENTS -->
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

    <!-- SCROLL DOWN  -->
    <!-- <img class="scroll-down" src="../../static/gfx/ui/scroll-down.svg" alt=""> -->

    <!-- PROJECT NAV BUTTONS  -->
    <section class="nav-buttons-flex">
      <nav class="nav-buttons-container">
        <div class="prev-btn" @click="prevProject" :class="{ stylePrevDisabled: this.prevDisabled }">
          <img class="projects-btn-prev" src="../../static/gfx/ui/previous-project.svg" alt="" />
        </div>
        <div class="next-btn" @click="nextProject" :class="{ styleNextDisabled: this.nextDisabled }">
          <img class="projects-btn-next" src="../../static/gfx/ui/next-project.svg" alt="" />
        </div>
        <!-- <div class="text" @click="toggleText" :class="{ styleTextDisabled: this.$store.state.textDisabled }">
          <img class="projects-btn-text" src="../../static/gfx/ui/text.svg" alt="" />
        </div> -->
      </nav>
    </section>

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
  //
  /* !!! DATA !!! */
  data () {
    return {
      index: 1,
      projects: 4,
      prevDisabled: true,
      nextDisabled: false
      // textDisabled: true
    }
  },
  //
  /* !!! CREATED !!! */
  created () {
    // invokes activateListen in methods
    this.activateListen()

    this.$store.state.textDisabled = true
    // console.log('textDisabled = ' + this.$store.state.textDisabled)

    // this.$store.watch((state) => {
    //   console.log('textDisabled = ' + this.$store.state.textDisabled) // could also put a Getter here
    // })

    window.addEventListener('scroll', this.handleScroll)
  },
  //
  /* !!! DESTROY !!! */
  destroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  //
  /* !!! METHODS !!! */
  methods: {
    // makes it possible to toggleText with scrolling
    // 1 second delay for smoother experience
    activateListen () {
      setTimeout(() => {
        this.$store.state.listenToScroll = true
        // console.log('listenToScroll is active')
      }, 1500)
    },
    handleScroll () {
      if (this.$store.state.listenToScroll === true) {
        this.$store.state.listenToScroll = false
        // console.log('listenToScroll is disabled')
        this.$store.state.toggleText = true
        this.$store.state.textDisabled = false
      }
    },
    // Previous Project Button
    prevProject () {
      if (this.index > 1) {
        this.index -= 1
        this.$store.state.toggleText = false
        this.$store.state.textDisabled = true
        this.nextDisabled = false
        this.activateListen()
        setTimeout(function () {
          window.scrollTo(0, 0)
        }, 500)
        if (this.index === 1) {
          this.prevDisabled = true
        }
      }
    },
    // Next Project Button
    nextProject () {
      if (this.index < this.projects) {
        this.index += 1
        this.$store.state.toggleText = false
        this.$store.state.textDisabled = true
        this.prevDisabled = false
        this.activateListen()
        setTimeout(function () {
          window.scrollTo(0, 0)
        }, 500)
        if (this.index === this.projects) {
          this.nextDisabled = true
        }
      }
    },
    // Toggle Text Button
    toggleText () {
      this.$store.state.toggleText = !this.$store.state.toggleText
      this.$store.state.textDisabled = !this.$store.state.textDisabled
      this.activateListen()
      setTimeout(function () {
        window.scrollTo(0, 0)
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
  // VUE TRANSITIONS
  .portfolio-fade-enter-active {
    transition: all .5s ease-in-out;
    transition-delay: .5s;

  }
  .portfolio-fade-leave-active {
    transition: all .5s ease-in-out;

  }
  .portfolio-fade-enter, .portfolio-fade-leave-to {
    opacity: 0;
  }

  // PROJECTS COMPONENTS STYLE
  .portfolio{
    
    .pro {
      border: 1px dashed red;
      // max-width: 900px;
      position: absolute;
      width: 100%;
    }

    // .ullernklinikken {
    //   width: 100%;
    // }
    //
    // .minvoice {
    //   width: 100%;
    // }
    //
    // .fra-ungdommen {
    //   width: 100%;
    // }
    //
    // .busemannen {
    //   width: 100%;
    // }

    /* SCROLL DOWN */
    // .scroll-down {
    //   bottom: 11rem;
    //   height: 8rem;
    //   position: absolute;
    //   right: 3rem;
    //   transform: translateX(-.85rem);
    // }

    // NAV PROJECTS BUTTONS
    .nav-buttons-flex {
      bottom: 3rem;
      position: fixed;
      z-index: 5;
      .nav-buttons-container {
        // border: 1px dashed red;
        display: flex;
        flex-direction: row;
        line-height: 0;
        margin-left: 3rem;

        div {
          align-items: center;
          background: grey;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          height: 4.5rem;
          margin-right: 1rem;
          transition: 500ms ease-in-out;
          width: 4.5rem;
          &:last-child {margin-right: 0;}

          img {
            height: 2.5rem;
          }
        }
        // SVG IMG'S
        .projects-btn-prev {
          transform: translateX(-.2rem);
        }
        .projects-btn-next {
          transform: translateX(.2rem);
        }
        .projects-btn-text {
          height: 1.5rem;
        }
        // BUTTON INTERACTIVE STYLES
        .text {
          transition: 500ms ease-in-out;
        }
        .stylePrevDisabled,
        .styleNextDisabled,
        .styleTextDisabled {
          background: lightgrey;
          transition: 500ms ease-in-out;
        }
      }
    }
  }
</style>
