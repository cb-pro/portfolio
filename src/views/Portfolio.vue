<template lang="html">
  <div class="portfolio">
    <section class="flex">
      <div class="container">

        <h1>Portfolio</h1>

        <section class="projects-container">

          <div class="project-container" v-in-viewport.once v-if="showUllern">
            <router-link to="/portfolio/ullernklinikken" class="project-wrapper" tag="div">
              <img src="../../static/img/portfolio/ullernklinikken-head.jpg" alt="Skjermvisning av prosjektet på desktop og mobil">
              <h5>Ullernklinikken</h5>
              <h6>Webapplikasjon for Ullernklinikken.no </h6>
            </router-link>
          </div>

          <div class="project-container" v-in-viewport.once v-if="showMinvoice">
            <router-link to="/portfolio/minvoice" class="project-wrapper" tag="div">
              <img src="../../static/img/portfolio/minvoice-head.jpg" alt="Skjermvisning av prosjektet på mobil">
              <h5>mInvoice<sup style="font-size:1rem">®</sup></h5>
              <h6>App design for minvoice<sup style="font-size:.5rem">®</sup></h6>
            </router-link>
          </div>

          <div class="project-container" v-in-viewport.once v-if="showFraUng">
            <router-link to="/portfolio/fra-ungdommen" class="project-wrapper" tag="div">
              <img src="../../static/img/portfolio/fra_ung_00-head.jpg" alt="Skjermvisning av prosjektet på tablet">
              <h5>Fra Ungdommen</h5>
              <h6>Ebok for Cappelen Damm</h6>
            </router-link>
          </div>

          <div class="project-container" v-in-viewport.once v-if="showBuse">
            <router-link to="/portfolio/busemannen" class="project-wrapper" tag="div">
              <img src="../../static/img/portfolio/busemannen-3dbook.jpg" alt="Bilde av bokomslaget">
              <h5>Busemannen</h5>
              <h6>Bokomslag for Cappelen Damm</h6>
            </router-link>
          </div>

          <div class="project-container" v-in-viewport.once v-if="showKollektiv">
            <router-link to="/portfolio/kollektivbryggeriet" class="project-wrapper" tag="div">
              <img src="../../static/img/portfolio/kb-head.jpg" alt="Bilde av label med logo">
              <h5>Kollektivbryggeriet</h5>
              <h6>Identitet og visuell profil</h6>
            </router-link>
          </div>

        </section>

      </div>
    </section>


  </div>
</template>

<script>
export default {
  data () {
    return {
      showUllern: false,
      showMinvoice: false,
      showFraUng: false,
      showBuse: false,
      showKollektiv: false
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.showUllern = !this.showUllern
    //   this.showMinvoice = !this.showMinvoice
    //   this.callRest()
    //   // this.showFraUng = !this.showFraUng
    //   // this.showBuse = !this.showBuse
    //   // this.showKollektiv = !this.showKollektiv
    // }, 2000)
    setTimeout(() => {
      this.showUllern = !this.showUllern
    }, 800)
    setTimeout(() => {
      this.showMinvoice = !this.showMinvoice
    }, 1200)
    setTimeout(() => {
      this.showFraUng = !this.showFraUng
    }, 1600)
    setTimeout(() => {
      this.showBuse = !this.showBuse
    }, 1600)
    setTimeout(() => {
      this.showKollektiv = !this.showKollektiv
    }, 1600)
  },
  methods: {
    // callRest () {
    //   // this.showMinvoice = !this.showMinvoice
    //   this.showFraUng = !this.showFraUng
    //   this.showBuse = !this.showBuse
    //   this.showKollektiv = !this.showKollektiv
    // }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/main.scss';


  .portfolio {
    font-family: $primary-font;
    .flex {
      display: flex;
      justify-content: center;
      .container {
        // max-width: $max-width;
        padding: 3rem 3rem;
        @media (min-width: 900px) {
          padding: 3rem 6rem;
        }
        width: 100%;

        h1 {
          position: absolute;
          @media (min-width: 900px) {
            position: fixed;
          }
        }

        .projects-container {
          margin-top: 9rem;
          @media (min-width: 900px) {
            margin-top: 6rem;
          }

          .project-container {
            // border: 1px dashed red;
            display: flex;
            justify-content: center;
            opacity: 0;
            transform: translateY(3rem);
            transition: .5s ease-in-out;

            .project-wrapper {
              // box-shadow: 0 .5rem 1.6rem #e6e4e4;
              border-bottom: .15rem solid grey;
              @media (min-width: 900px) {
                width: 50%
              }
              cursor: pointer;
              margin-bottom: 4rem;
              &:last-child {
                margin-bottom: 8rem;
              }
                &:hover {
                  // box-shadow: 0 .5rem 1.6rem #e6e4e4;
                  opacity: .5;
                  // padding: 3rem;
                  transform: scale(1.01);
                }
                &:active {
                  transform: scale(.995);
                }
              img {
                width: 100%;
              }
              h5 {
                // padding: 0 0 0 2rem;
                margin: 1rem 0rem .25rem 0rem;
              }
              h6 {
                font-size: 1.4rem;
                font-weight: 400;
                margin: 0rem 0rem;
                padding: 0 0 1rem 0;
              }
            } // projects-container
          } // project-flex
        } // projects-container

      }
    }
  }

  .in-viewport {
    opacity: 1!important;
    transition: .5s ease-in;
    // transition-delay: .5s;
    transform: translateY(0rem)!important;
  }
</style>
