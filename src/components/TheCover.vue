<template>
  <section class="the-cover">
    <the-particles
      :particles="particles"
      :use-parallax="true"
    />
    <div class="cover-title">
      <div class="title-bg-blocks" />
      <div class="title-message-base">
        <pre>
          {{ titleMessageBase }}
        </pre>
      </div>
      <!-- /.title-message-base -->
      <div class="title-message-main">
        <pre>
          {{ titleMessageMain }}
        </pre>
      </div>
      <!-- /.title-message-main -->
    </div>
    <!-- /.cover-title -->
    <div class="cover-name">
      {{ coverName }}
    </div>
  </section>
  <!-- /.the-cover -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TheParticles, { IParticle } from '../components/TheParticles.vue'

@Component({
  components: {
    'the-particles': TheParticles
  }
})
export default class TheCover extends Vue {
  @Prop({ default: true, type: Boolean }) private useParticles?: Boolean

  name: string = 'TheCover'

  titleMessageBase: string = `
export const Portfolio {
  title: '


             '`

  titleMessageMain: string = `
  DEVELOPMENT
  FOR
  BETTTER
  DESIGN`

  coverName: string = `SUCHAN KIM`

  particles: IParticle[] = [
    { shape: 3, cls: '-tri', scaleMin: 0.5, scaleMax: 1.5, count: 4, animationMin: 15, animationMax: 25 },
    { shape: 4, cls: '-rect', scaleMin: 0.5, scaleMax: 2, count: 5, animationMin: 15, animationMax: 25 },
    { shape: 5, cls: '-penta', scaleMin: 0.5, scaleMax: 2, count: 3, animationMin: 15, animationMax: 25 }
  ]
}

</script>

<style lang="scss">
section.the-cover {
  padding-bottom: 500px;
  width: 100vw;
  height: 100vh;
  .the-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    .-tri {
      fill: var(--cx-barbie-pink);
    }
    .-rect {
      fill: var(--cx-mango);
    }
    .-penta {
      fill: var(--cx-light-skyblue);
    }
  }
}
</style>
