<template>
  <div
    id="app"
    :class="{
      '-is-mobile': isMobile
    }"
  >
    <h1
      class="app-title"
      aria-role="hidden"
    >
      {{ name }}
    </h1>
    <the-cover />
    <what-i-did />
    <other-projects />
    <the-footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TheCover from './views/TheCover.vue'
import WhatIDid from './views/WhatIDid.vue'
import 'normalize.css'
import OtherProjects from './views/OtherProjects.vue'
import TheFooter from './views/TheFooter.vue'

@Component({
  components: {
    'the-cover': TheCover,
    'what-i-did': WhatIDid,
    'other-projects': OtherProjects,
    'the-footer': TheFooter
  }
})
export default class App extends Vue {
  name: string = 'Development for Better Design'

  get isMobile () {
    return this.$store.state.isMobile
  }

  created () {
    document.title = this.name
  }

  mounted () {
    this.$store.dispatch('get-is-mobile')
    window.addEventListener('resize', this.handleWindowSize)
  }

  /**
   * @function
   * WindowResize시 innerWidth를 체크합니다.
   */
  handleWindowSize (e: Event):void {
    this.$store.dispatch('get-is-mobile')
  }
}

</script>

<style lang="scss">
@import './style/fonts.scss';
@import './style/global.scss';

.app-title {
  display: none;
}
</style>
