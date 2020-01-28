<template>
  <div id="app">
    <h1
      class="app-title"
      aria-role="hidden"
    >
      {{ name }}
    </h1>
    <the-cover />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TheCover from './views/TheCover.vue'
import 'normalize.css'

@Component({
  components: {
    'the-cover': TheCover
  }
})
export default class App extends Vue {
  name: string = 'Development for Better Design'

  created () {
    document.title = this.name
  }
}

</script>

<style lang="scss">
@import './style/global.scss';
@import './style/fonts.scss';

.app-title {
  display: none;
}
</style>
