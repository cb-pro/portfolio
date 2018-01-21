<template lang="html">
  <div class="portfolio">
    <section class="flex">
      <div class="container">
        <h1>Portfolio</h1>

        <div class="projects-flex">
          <router-link to="/portfolio/ullernklinikken" class="projects-container" tag="div">
            <img src="../../static/img/portfolio/ullernklinikken-head.jpg" alt="Skjermvisning av prosjektet på desktop og mobil">
            <h5>Ullernklinikken</h5>
            <h6>Webapplikasjon for Ullernklinikken.no </h6>
          </router-link>
        </div>

        <div class="projects-flex">
          <div class="projects-container" @click="redirectTo('/portfolio/minvoice')">
            <img src="../../static/img/portfolio/minvoice-head.jpg" alt="Skjermvisning av prosjektet på mobil">
            <h5>mInvoice<sup style="font-size:1rem">®</sup></h5>
            <h6>App design for minvoice<sup style="font-size:.5rem">®</sup></h6>
          </div>
        </div>

        <div class="projects-flex">
          <div class="projects-container" @click="redirectTo('/portfolio/fra-ungdommen')">
            <img src="../../static/img/portfolio/fra_ung_00-head.jpg" alt="Skjermvisning av prosjektet på tablet">
            <h5>Fra Ungdommen</h5>
            <h6>Ebok for Cappelen Damm</h6>
          </div>
        </div>

        <div class="projects-flex">
          <div class="projects-container" @click="redirectTo('/portfolio/busemannen')">
            <img src="../../static/img/portfolio/busemannen-3dbook.jpg" alt="Bilde av bokomslaget">
            <h5>Busemannen</h5>
            <h6>Bokomslag for Cappelen Damm</h6>
          </div>
        </div>

      </div>
    </section>


  </div>
</template>

<script>
export default {
  methods: {
    redirectTo (url) {
      this.$router.push(url)
    }
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

        }

        .projects-flex {
          display: flex;
          justify-content: center;

          .projects-container {
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
          }
        }

      }
    }
  }
</style>
