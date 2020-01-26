<template>
  <section class="the-cover">
    <the-particles
      :particles="particles"
      :use-parallax="true"
      class="the-particles"
    />
    <div class="cover-title">
      <div class="title-bg-blocks">
        <object-matrix
          :cols="10"
          :col-size="150"
          :rows="8"
          :row-size="80"
          :presence="0.2"
          :fuzzy-x="50"
        >
          <template #default="{ item }">
            <div
              class="block-item"
              :style="{
                'width': item.getRandomNum(10, 500) + 'px',
                'animation-duration': item.getRandomNum(5, 15) + 's'
              }"
            />
          </template>
        </object-matrix>
      </div>
      <div class="title-message-base">
        <pre>
          {{ titleMessageBase }}
        </pre>
        <div class="title-message-main">
          <pre>
            {{ titleMessageMain }}
          </pre>
        </div>
        <!-- /.title-message-main -->
      </div>
      <!-- /.title-message-base -->
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
import TheParticles, { IParticle } from './TheParticles.vue'
import ObjectMatrix, { IRandom } from './ObjectMatrix.vue'
import { RandomNum } from './utils'

@Component({
  components: {
    'the-particles': TheParticles,
    'object-matrix': ObjectMatrix
  }
})
export default class TheCover extends Vue {
  @Prop({ default: true, type: Boolean })
  private useParticles?: Boolean

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
    { shape: 3, cls: '-tri', scaleMin: 0.5, scaleMax: 1.5, count: 12, animationMin: 15, animationMax: 25 },
    { shape: 4, cls: '-rect', scaleMin: 0.5, scaleMax: 2, count: 10, animationMin: 15, animationMax: 25 },
    { shape: 5, cls: '-penta', scaleMin: 0.5, scaleMax: 2, count: 8, animationMin: 15, animationMax: 25 }
  ]
}

</script>

<style lang="scss">
section.the-cover {
  padding-bottom: 500px;
  width: 100vw;
  height: 100vh;
  background-color: var(--cx-manilla);
  .the-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
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
  .cover-title {
    --line-height: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 65px;
    line-height: var(--line-height);
    color: var(--cx-white);
    pre {
      margin: 0;
      font-family: 'Source Code Pro', monospace;
    }
    .title-bg-blocks {
      display: block;
      .block-item {
        @keyframes block-x-scales {
          0% {
            transform: scaleX(0) translateX(-10px);
            opacity: .1;
          }
          20% {
            transform: scaleX(.7);
            opacity: .4;
          }
          90% {
            transform: scaleX(1);
            opacity: .3;
          }
          100% {
            transform: scaleX(0) translateX(10px);
          }

        }
        display: block;
        height: var(--line-height);
        background-color: var(--cx-dark-cream);
        opacity: .4;
        background-blend-mode: multiply;
        animation-name: block-x-scales;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
      }
    }
    .title-message-base {
      font-weight: 300;
      position: relative;
    }
    .title-message-main {
      font-size: 75px;
      position: absolute;
      font-weight: 900;
      top: var(--line-height);
      left: 390px;
    }
  }
}
</style>
