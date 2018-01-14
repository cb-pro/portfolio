<template lang="html">
  <div class="home">
    <HomeIdOne class="ids" v-if="index === 1" />
    <HomeIdIkea class="ids" v-if="index === 2" />
    <HomeIdCola class="ids" v-if="index === 3" />
    <HomeIdClas class="ids" v-if="index === 4" />
    <HomeIdDisney class="ids" v-if="index === 5" />
  </div>
</template>

<script>
import HomeIdOne from '../components/Home-id-one'
import HomeIdIkea from '../components/Home-id-ikea'
import HomeIdCola from '../components/Home-id-cola'
import HomeIdClas from '../components/Home-id-clas'
import HomeIdDisney from '../components/Home-id-disney'

export default {
  components: {
    'HomeIdOne': HomeIdOne,
    'HomeIdIkea': HomeIdIkea,
    'HomeIdCola': HomeIdCola,
    'HomeIdClas': HomeIdClas,
    'HomeIdDisney': HomeIdDisney
  },
  data () {
    return {
      index: 1
    }
  },
  created () {
    this.changeId()
  },
  methods: {
    changeId () {
      // setInterval(() => {
      //   if (this.index < 5) {
      //     this.index++
      //   } else {
      //     this.index = 2
      //   }
      // }, 15000)
    }
  }
}
</script>

<style lang="scss">
  .home {
    .ids {
      position: absolute;
      // max-width: 900px;
    }
  }
</style>
