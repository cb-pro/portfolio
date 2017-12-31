<template lang="html">
  <div class="portfolio">
    <!-- <h1>PORTFOLIO</h1> -->

    <div class="portfolio-pro" :style="{ width: projectsContainer.style }">
      <div class="portfolio-pro-list"
        v-for="project in projects"
        :style="{ transform: projectList.style }"
      >
        <h2>{{ project.title }}</h2>
        <p v-html="project.content"></p>
      </div>
    </div>

    <div class="portfolio-buttons">
      <button @click="previousProject">Previous</button>
      <button @click="nextProject">Next</button>
      <button>Hide Text</button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
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
          content: 'Webapplikasjon for Ullernklinikken.no <br />Frilans oppdrag.'
        },
        {
          title: 'mInvoice®',
          content: 'App design for minvoice® <br />Samarbeid med Sigurd Finseth / IUX'
        },
        {
          title: 'Fra Ungdommen',
          content: 'Ebok for Cappelen Damm. <br/>Vinner av Årets vakreste Ebok 2015.'
        },
        {
          title: 'Busemannen',
          content: 'Bokomslag for Cappelen Damm. <br />Samarbeid med Bente C. Bergan.'
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
        console.log(this.projectList.index)
      }
    },
    nextProject () {
      if (this.projectList.index < this.projects.length) {
        this.projectList.value -= 100
        this.projectList.style = 'translateX(' + this.projectList.value + '%)'
        this.projectList.index++
        console.log(this.projectList.index)
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
      }
    }

    .portfolio-buttons {
      position: absolute;
      bottom: 40px;
    }
  }
</style>










<!-- <template lang="html">
  <div class="portfolio">

    <div class="portfolio-pro">
      <PortfolioProUllernklinikken />
      <PortfolioProMinvoice />
      <PortfolioProFraUngdommen />
    </div>

  </div>
</template>

<script>
import PortfolioProUllernklinikken from '../components/Portfolio-pro-ullernklinikken.vue'
import PortfolioProMinvoice from '../components/portfolio-pro-minvoice.vue'
import PortfolioProFraUngdommen from '../components/portfolio-pro-fra_ungdommen.vue'

export default {
  components: {
    'PortfolioProUllernklinikken': PortfolioProUllernklinikken,
    'PortfolioProMinvoice': PortfolioProMinvoice,
    'PortfolioProFraUngdommen': PortfolioProFraUngdommen
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .portfolio {
    border: 1px dashed red;
    display: flex;
    font-family: $primary-font;
    width: 300%
  }
</style> -->
