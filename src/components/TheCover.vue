<template>
  <section class="the-cover">
    <particle-items
      :particles="particles"
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
import ParticleItems, { ParticleProp } from '../components/ParticleItems'

@Component({
  components: {
    'particle-items': ParticleItems
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

  particles: ParticleProp[] = [
    { shape: 'triangle', class: '-tri', count: 5 },
    { shape: 'rectangle', class: '-rect', count: 5 },
    { shape: 'pentagon', class: '-penta', count: 5 }
  ]
}

</script>
