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

    <nav class="nav-buttons">
      <div class="prev-btn" @click="prevProject"></div>
      <div class="next-btn" @click="nextProject"></div>
      <div class="hide-text" @click="hideText"></div>
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
      index: 1
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
      this.index -= 1
      this.$store.state.hideText = false
      this.activateListen()
    },
    // Next Project Button
    nextProject () {
      this.index += 1
      this.$store.state.hideText = false
      this.activateListen()
    },
    // Hide Text Button
    hideText () {
      this.$store.state.hideText = !this.$store.state.hideText
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


    //NAV
    .nav-buttons {
      // border: 1px dashed red;
      bottom: 30px;
      line-height: 0;
      padding-left: 30px;
      position: fixed;
      div {
        background: grey;
        border-radius: 50%;
        display: inline-block;
        height: 45px;
        margin-right: 10px;
        width: 45px;
      }
    }

  }
</style>







<!-- <template lang="html">
  <div class="portfolio">

    <compUllernklinikken class="pro ullernklinikken" :style="{ left: this.navData.value[0]+'%' }" />
    <compMinvoice class="pro minvoice" :style="{ left: this.navData.value[1]+'%' }" />
    <compFraUngdommen class="pro fra-ungdommen" :style="{ left: this.navData.value[2]+'%' }" />
    <compBusemannen class="pro busemannen" :style="{ left: this.navData.value[3]+'%' }" />

    <nav class="nav-buttons">
      <div class="prev-btn" @click="prevProject"></div>
      <div class="next-btn" @click="nextProject"></div>
      <div class="hide-text"></div>
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
      navData: {
        index: 1,
        fixed: true,
        value: [0, 100, 200, 300]
      }
    }
  },
  created () {
    // console.log(this.navData.value)
  },
  methods: {
    nextProject () {
      if (this.navData.index < this.navData.value.length) {
        this.navData.index += 1
        this.navData.value = this.navData.value.map(number => number - 100)
      }
    },
    prevProject () {
      if (this.navData.index > 1) {
        this.navData.index -= 1
        this.navData.value = this.navData.value.map(number => number + 100)
      }
    }
  }
}
</script>

<style lang="scss">
  .portfolio{

    .pro {
      // bottom: 0;
      // overflow-y: scroll;
      // top: 0;
      transition: 500ms ease-in-out;
      // height: 1200px;
    }

    .ullernklinikken {
      position: fixed;
      width: 100%;
    }

    .minvoice {
      position: absolute;
      width: 100%;
    }

    .fra-ungdommen {
      position: fixed;
      width: 100%;
    }

    .busemannen {
      position: fixed;
      width: 100%;
    }


    //NAV
    .nav-buttons {
      bottom: 30px;
      padding-left: 30px;
      position: fixed;
      div {
        background: grey;
        border-radius: 50%;
        bottom: 30px;
        display: inline-block;
        height: 45px;
        margin-right: 10px;
        width: 45px;
      }
    }

  }
</style> -->







<!-- <template lang="html">
  <div class="container">
    <div class="one box">ONE</div>
    <div class="two box">TWO</div>
    <div class="three box">THREE
      <div class="threeover"></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .container {
    // overflow: hidden;
  }

  .box {
    transition: 500ms ease-in-out;
    // overflow: hidden;
  }

  .one {
    // display: inline-block;
    width: 105%;
    height: 1200px;
    position: fixed;
    background: #000;
    color: #fff;
  }
  .two {
    // display: inline-block;
    width: 100%;
    left: 100%;
    top: 0;
    height: 1200px;
    background: #ff0000;
    color: #fff;
    position: absolute;
  }
  .three {
    // display: inline-block;
    width: 100%;
    left: 200%;
    top: 0;
    height: 1200px;
    background: #00c2ff;
    color: #fff;
    position: fixed;

    .threeover {
      position: absolute;
      background: #fffc00;
      opacity: .3;
      width: 100%;
      top: 0;
      bottom: 0;
    }
  }
</style> -->

<!-- <template lang="html">
  <div class="portfolio">
    <div class="portfolio-pro" :style="{ width: projectsContainer.style }">
      <div class="portfolio-pro-list"
        v-for="project in projects"
        :style="{ transform: projectList.style }"
      >
        <h2>{{ project.title }}</h2>
        <h4 v-html="project.subtitle"></h4>
        <p v-html="project.text"></p>
        <hr />
        <img :src="'./static/gfx/' + logo" v-for="logo in project.logos" class="project-logos" />
      </div>
    </div>

    <div class="portfolio-buttons">
      <button @click="previousProject" :class="{ portfolioButtonDisabled: portfolioButton.previousIsDisabled }">Previous</button>
      <button @click="nextProject" :class="{ portfolioButtonDisabled: portfolioButton.nextIsDisabled }">Next</button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      portfolioButton: {
        previousIsDisabled: true,
        nextIsDisabled: false
      },
      projectsContainer: {
        style: ''
      },
      projectList: {
        style: '',
        value: 0,
        index: 1
      },
      projects: [
        {
          title: 'Ullernklinikken',
          subtitle: 'Webapplikasjon for Ullernklinikken.no <br />Frilans oppdrag.',
          text: 'Ullernklinikken er en liten klinikk som ligger i Ullern Allé i Oslo. Klinikken består av manuellterapauter som er eksperter på behandling av muskel- og skjelettsykdommer. Fra idrettsutøvere til vanlige folk, alle er velkommne.',
          logos: ['logo.png', 'logo.png']
        },
        {
          title: 'mInvoice®',
          subtitle: 'App design for minvoice® <br />Samarbeid med Sigurd Finseth / IUX',
          text: 'mInvoice er neste generasjons serviceplattform. Som forbruker får du total kontroll over alle dine tjenesteleverandører. Motta og betal alle dine fakturaer både i app og på web.',
          logos: ['logo.png', 'logo.png']
        },
        {
          title: 'Fra Ungdommen',
          subtitle: 'Ebok for Cappelen Damm. <br/>Vinner av Årets vakreste Ebok 2015.',
          text: 'Dette er den digitale utgaven av boka Fra Ungdommen. Boken er bygd opp med enkel navigering og man kan velge om man vil lese i kronologisk rekkefølge eller hoppe fra kapittel til kapittel. I den digitale utgaven er det også video som er knyttet til hver ungdomsprofil.',
          logos: ['logo.png', 'logo.png']
        },
        {
          title: 'Busemannen',
          subtitle: 'Bokomslag for Cappelen Damm. <br />Samarbeid med Bente C. Bergan.',
          text: 'Knut Nærum og fire av forfatterne bak Nytt på nytt har rottet seg sammen om en saftig parodi på Jo Nesbøs Harry Hole-bøker. Helten er mer sliten, Oslo er råtnere og volden er nesten like drøy.',
          logos: ['logo.png', 'logo.png']
        }
      ]
    }
  },
  created () {
    this.logProjects()
    this.projectsContainer.style = this.projects.length + '00%'
  },
  methods: {
    logProjects () {
      // console.log(this.projects.length)
    },
    previousProject () {
      if (this.projectList.index > 1) {
        this.projectList.value += 100
        this.projectList.style = 'translateX(' + this.projectList.value + '%)'
        this.projectList.index--
        // console.log(this.projectList.index)
        if (this.projectList.index === 1) {
          this.portfolioButton.previousIsDisabled = true
        }
        if (this.projectList.index < this.projects.length) {
          this.portfolioButton.nextIsDisabled = false
        }
      }
    },
    nextProject () {
      if (this.projectList.index < this.projects.length) {
        this.projectList.value -= 100
        this.projectList.style = 'translateX(' + this.projectList.value + '%)'
        this.projectList.index++
        // console.log(this.projectList.index)
        if (this.projectList.index > 1) {
          this.portfolioButton.previousIsDisabled = false
        }
        if (this.projectList.index === this.projects.length) {
          this.portfolioButton.nextIsDisabled = true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .portfolio {
    border: 1px dashed red;
    overflow-x: hidden;
    font-family: $primary-font;


    .portfolio-pro {
      border: 1px dashed red;
      display: flex;
      // width: 400%;
      .portfolio-pro-list {
        border: 1px dashed red;
        transition: 500ms ease-in-out;
        width: 100%;

        .project-logos {
          height: 50px;
          margin-right: 10px;
        }
      }
    }

    .portfolio-buttons {
      position: absolute;
      bottom: 40px;

      .portfolioButtonDisabled {
        opacity: 0.3;
      }
    }
  }
</style> -->
