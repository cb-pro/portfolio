<template lang="html">
  <div class="comp-about">
      <h1>Om meg</h1>
    <section class="container-main">
        <div class="wrapper-main">

        <h3 style="margin-top:-1rem;margin-bottom: 2.5rem;">
          Jeg er en designer med lidenskap for koding.
        </h3>

        <hr style="margin-bottom:2.5rem;" /> <!-- LINE -->

        <div class="wrapper-content">
          <div>
            <h3 style="color:red;">Hei</h3>
            <p>
              <strong>
                Mitt navn er Christoffer og jeg jobber freelance som web designer, interaksjons designer, ui designer, ux designer og front-end utvikler. Kort sagt, jeg kan designe nettsider og kode dem.
              </strong>
            </p>
          </div>

          <div>
            <h3>:Design</h3>
            <p>
              Fra ide til ferdig produkt, om det skal printes eller digitaliseres. Jeg har lang erfaring innenfor design og kan bygge identiteter fra bunnen av. Gjennom solide strategier og grundige analyser kan jeg hjelpe deg med å oppfylle både dine og brukernes behov for best mulig brukeropplevelse.</p>
          </div>

          <div>
            <h3>:Kode</h3>
            <p>
              Jeg kan lage responsive sider som fungerer til alle flater uavhengig hvilken enhet du bruker. Ønsker man å kunne redigere innholdet selv kan man implementere et cms system som for eksempel Wordpress. Og ved hjelp av JavaScript kan man lage enkle interaksjoner som gjør siden enda mer brukervennlig.
            </p>
          </div>
        </div>

        <!-- <div class="wrapper-coop">
          <h5>Samarbeide?</h5>
          <strong><p>
            Send meg gjerne mail eller ring meg på telefon hvis du har et prosjekt som du ønsker å få realisert.
          </p>
          <p>
            Mail: post@christofferbogsti.com <br/>
            Telefon: <sup>+47</sup> 936 77 156
          </p>
          </strong>
        </div> -->


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

  .comp-about {
    font-family: $primary-font;
    h1 {
      padding: 3rem 0 0 3rem;
      margin-bottom: 0;
      @media (min-width: 768px) {
        margin-bottom: 3rem;
      }
      @media (min-width: 900px) {
        padding: 3rem 0 0 6rem;
      }
    }
    .container-main {
      // border: 1px dashed red;
      display: flex;
      justify-content: center;
      .wrapper-main {
        // border: 1px dashed red;
        padding: 3rem 3rem;
        width: 100%;
        @media (min-width: 900px) {
          padding: 3rem 6rem;
        }

        .wrapper-content {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;

          div {
            width: 100%;
            @media (min-width: 900px) {
              width: 30%;
            }
          }
          @media (max-width: 899px) {
            div {
              h3 {
                margin-bottom: 1rem;
              }
            }
            div:not(:first-child) {
              margin-top: 2rem;
            }
            div:last-child {
              @media (max-width: 900px) {
                margin-bottom: 9rem;
              }
            }
          }
        }

        .wrapper-coop {
          margin-top: 3rem;
          margin-bottom: 9rem;
          h5, p {margin-bottom: .5rem;}
          @media (min-width: 900px) {
            // bottom: 3rem;
            // position: fixed;
            // left: 6rem;
            margin-top: -4rem;
            margin-bottom: 0rem;
            width: 27%;
            p {font-size: 1rem;}
          }

        }


      } //wrapper-main
    } // container-main
  } // comp-about
</style>
