<template>
  <div id="app">
    <the-cover />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TheCover from './components/TheCover.vue'
import 'normalize.css'

@Component({
  components: {
    'the-cover': TheCover
  }
})
export default class App extends Vue {
  name: string = 'App1'
}

</script>

<style lang="scss">
  @import './style/global.scss'
</style>
