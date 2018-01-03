<template lang="html">
  <div class="portfolio">
    <!-- <h1>PORTFOLIO</h1> -->

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
</style>
