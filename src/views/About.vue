<template lang="html">
  <div class="about">
    <section class="about-container">
      <h1>Hei</h1>
      <h3>Jeg er en designer med <br />lidenskap for koding.</h3>
      <div class="about-links">
        <h6 @click="activeLink = 1" :class="{ activeLink: activeLink === 1 }">Om meg</h6>
        <h6 @click="activeLink = 2" :class="{ activeLink: activeLink === 2 }">Skills</h6>
        <h6 @click="activeLink = 3" :class="{ activeLink: activeLink === 3 }">Anbefalinger</h6>
      </div>
      <hr />
      <div class="about-links-content">
        <div class="about-links-skole" v-if="activeLink === 1">
          <div v-html="this.$store.state.data[1].about.omMeg" />
        </div>
        <div class="about-links-utvikling" v-if="activeLink === 2">
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeLink: 2
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/main.scss';

  .about {
    .about-container {
      font-family: $primary-font;
      margin: 0 auto;
      padding-top: 6%;
      width: 83%;

      h3 {
        margin-top: -1rem;
        margin-bottom: 2.5rem;
      }

      .about-links {
        justify-content: space-between;
        // border: 1px dashed red;
        display: flex;
        // margin-top: 3rem;

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
        margin-bottom: 1rem;
      }

      .about-links-content{
        position: relative;
        // div {
        //   margin-bottom: 11rem;
        // }
        .about-links-skole,
        .about-links-utvikling,
        .about-links-anbefalinger {
          position: absolute;
          margin-bottom: 11rem;
        }
        .logo-firm-container {
          align-content: space-between;
          align-items: center;
          // border: 1px dashed red;
          display: flex;
          flex-wrap: wrap;
          // justify-content: space-between;

          .logo-firm-img {
            height: 4rem;
            margin: 1.5rem 1rem;
          }
          .logo-firm-img:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
</style>
