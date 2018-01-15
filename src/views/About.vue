<template lang="html">
  <div class="about">
    <section class="about-flex">
      <div class="about-container">
        <h1>Hei</h1>
        <h3>Jeg er en designer med lidenskap for koding.</h3>

        <!-- LINE -->
        <hr />


        <div class="about-links-content">

          <!-- OM MEG -->
          <div class="about-links-om-meg" >
            <div v-html="this.$store.state.data[1].about.omMeg" />
          </div>

          <!-- SKILLS -->
          <div class="about-links-skills" >
            <div v-html="this.$store.state.data[1].about.utvikling"/>
            <div class="logo-firm-container">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/github-seeklogo.com.svg" alt="">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/bootstrap-seeklogo.com.svg" alt="">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/node-sass-seeklogo.com.svg" alt="" style="height:4.5rem">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/gulp-seeklogo.com.svg" alt="" style="height:4.5rem">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/webpack-seeklogo.com.svg" alt="" style="height:4.5rem">
            </div>
            <div class="logo-firm-container">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/javascript-js-seeklogo.com.svg" alt="">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/jquery.svg" alt="" style="height:2rem">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/vuejs-seeklogo.com.svg" alt="" style="margin: 1.5rem .2rem">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/react-seeklogo.com.svg" alt="" style="margin: 1.5rem .4rem">
            </div>
            <div class="logo-firm-container">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/node-node-js-seeklogo.com.svg" alt="">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/npm-node-package-manager.svg" alt="" style="height:3rem">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/yarn-seeklogo.com.svg" alt="">
            </div>
            <div class="logo-firm-container">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/ghost-logo.svg" alt="" style="height:3rem">
              <img class="logo-firm-img" src="../../static/gfx/logos-firm/wordpress-icon-seeklogo.com.svg" alt="">
            </div>
            <p style="font-size: .9rem">Github, Bootstrap, Sass, Gulp, Webpack, Javascript, jQuery, Vue.js, React.js, Node.js, NPM, Yarn, Ghost, Wordpress</p>
          </div>

          <!-- ANBEFALINGER -->
          <section class="about-links-anbefalinger" >

            <!-- Udemy Logo -->
            <div>
              <p>Ved siden av å lage nettsider prøver jeg også å oppgradere kunnskapene mine ved blant annet å ta kurs på Udemy.com. Her er en liste over de kursene jeg har tatt og anbefaler hvis man ønsker å lære mer om webutvikling.</p>
              <img src="../../static/img/anbefalinger/udemy/logo-udemy.svg" alt="" style="height:3rem;width:inherit;margin-bottom:2rem;" />
            </div>

            <!-- Udemy -->
            <section class="udemy">

              <div>
                <img class="udemy" src="../../static/img/anbefalinger/udemy/udemy-js.jpg" alt="">
                <h5>JavaScript:</h5>
                <h6>Understanding the Weird Parts</h6>
              </div>
              <div>
                <img class="udemy" src="../../static/img/anbefalinger/udemy/udemy-bootcamp.jpg" alt="">
                <h5>The Web Developer Bootcamp</h5>
                <h6>HTML, CSS, JS, Node, restApi and more!</h6>
              </div>
              <div>
                <img class="udemy" src="../../static/img/anbefalinger/udemy/udemy-advanced-bootcamp.jpg" alt="">
                <h5>The Advanced Web Developer Bootcamp</h5>
                <h6>Advanced JS, ES2015, React 16, Redux, Jasmine, AJAX & Axios, Node APIs, Authentication & Authorization, D3, SVG, and more!</h6>
              </div>
              <div>
                <img class="udemy" src="../../static/img/anbefalinger/udemy/udemy-ux.jpg" alt="">
                <h5>UX & Web Design Master Course:</h5>
                <h6>UX strategies, Project scope, Information Architecture, User research and testing, Wireframing and more!</h6>
              </div>
            </section>

            <!-- Books -->
            <h3>For å lære mer om design, anbefaler jeg disse bøkene:</h3>

            <section class="books-flex">
              <div>
                <img class="udemy" src="../../static/img/anbefalinger/books/book-visuell-identitet.jpg" alt="">
                <h5>Visuell identitet</h5>
                <h6>av Bjørn Rybakken</h6>
              </div>
              <div>
                <img class="udemy" src="../../static/img/anbefalinger/books/book-logo-type.jpg" alt="">
                <h5>Logotype</h5>
                <h6>av Michael Evamy</h6>
              </div>
              <div>
                <img class="udemy" src="../../static/img/anbefalinger/books/book-typo-fundamental.jpg" alt="">
                <h5>The Fundamentals of Typography</h5>
                <h6>av Gavin Ambrose & Paul Harris</h6>
              </div>
              <div>
                <img class="udemy" src="../../static/img/anbefalinger/books/book-grid-systems.jpg" alt="">
                <h5>Grid systems</h5>
                <h6>av Josef Müller-Brockmann</h6>
              </div>
              <div>
                <img class="udemy" src="../../static/img/anbefalinger/books/book-fargene-forteller.jpg" alt="">
                <h5>Fargene forteller</h5>
                <h6>av Tove Steinbo</h6>
              </div>
            </section>

          </section>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .about {
    .about-flex {
      // border: 1px dashed red;
      display: flex;
      justify-content: center;
      .about-container {
        // border: 1px dashed red;
        font-family: $primary-font;
        // max-width: 30%;
        padding: 3rem;
        width: 100%;
        @media (min-width: 900px) {
          max-width: 50%;
        }
        h3 {
          margin-top: -1rem;
          margin-bottom: 2.5rem;
        }

        .about-links {
          justify-content: space-between;
          // border: 1px dashed red;
          display: flex;
          h6 {
            // border: 1px dashed red;
            color: lightgrey;
            cursor: pointer;
            margin: 0;
            text-transform: uppercase;
          }
          h6:hover {
            color: red;
          }
          .activeLink {
            color: red;
          }
        }

        hr {
          margin-bottom: 2.5rem;
        }

        .about-links-content{
          position: relative;
          .about-links-om-meg,
          .about-links-skills,
          .about-links-anbefalinger {
            // position: absolute;
            margin-bottom: 3rem;
          }

        .about-links-skills {
          @media (min-width: 768px) and (max-width: 899px)  {
            p {
              margin-top: 2rem;
              text-align: center;
            }
          }
          @media (min-width: 900px) {
            p {
              margin-top: 2rem;
              text-align: center;
            }
          }
        }

          // SKILLS STYLES
          .logo-firm-container {
            align-content: space-between;
            align-items: center;
            // border: 1px dashed red;
            display: flex;
            flex-wrap: wrap;
            @media (min-width: 0px) {
              justify-content: center;
            }
            .logo-firm-img {
              height: 4rem;
              margin: 1.5rem 1rem;
            }
            .logo-firm-img:first-child {
              margin-left: 0;
            }
          }

          // ANBEFALINGER STYLES
          .about-links-anbefalinger {
            .udemy {
              div {
                border-bottom: .1rem solid grey;
                padding-bottom: 1rem;
                margin-bottom: 4rem;
                // &:first-child {margin-bottom: 0;}
                img {
                  margin-bottom: .5rem;
                  width: 100%;
                  @media (min-width: 900px) {
                    margin-left: 50%;
                    margin-bottom: .1rem;
                    transform: translate(-50%);
                    width: 95%;
                  }
                }
                h5 {
                  margin: 1rem 0rem .25rem 0rem;
                }
                h6 {
                  font-size: 1.4rem;
                  font-weight: 400;
                  margin: 0rem 0rem;
                }
              }
            }

            h3 {
              margin-top: 7rem;
              @media (min-width: 900px) {
                margin-bottom: 5rem;
              }
            }

            .books-flex {
              div {
                border-bottom: .1rem solid grey;
                padding-bottom: 1rem;
                margin-bottom: 4rem;
                // &:first-child {margin-bottom: 0;}
                img {
                  margin-bottom: .5rem;
                  width: 100%;
                  @media (min-width: 900px) {
                    margin-left: 50%;
                    margin-bottom: 3rem;
                    transform: translate(-50%);
                    width: 50%;
                  }
                }
                h5 {
                  margin: 1rem 0rem .25rem 0rem;
                }
                h6 {
                  font-size: 1.4rem;
                  font-weight: 400;
                  margin: 0rem 0rem;
                }
              }
            }
          }

        }
      }
    }
  }
</style>
