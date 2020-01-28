<template>
  <section
    class="the-cover"
    :class="{ '-scrolled': scrolled }"
  >
    <the-particles
      :particles="particles"
      :use-parallax="true"
      class="the-particles"
    />
    <div class="cover-content">
      <div class="content-title">
        <div class="title-bg-blocks">
          <object-matrix
            :cols="6"
            :col-size="160"
            :rows="7"
            :row-size="80"
            :presence="0.2"
            :fuzzy-x="50"
          >
            <template #default="{ item }">
              <div
                class="block-item"
                :style="{
                  'width': randomNum(10, 80) + 'px',
                  'animation-duration': randomNum(1, 8) + 's'
                }"
              />
            </template>
          </object-matrix>
          <ul class="blocks-static">
            <li
              :class="[
                'static-item',
                'item-' + index
              ]"
              :style="{
                'margin-left': randomNum(-120, 120) + 'px',
                'width': item.width ? item.width + 'px' : randomNum(160, 480) + 'px'
              }"
              v-for="(item, index) in staticBlocks"
              :key="index"
            />
          </ul>
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
      <div class="content-name">
        <span class="name">{{ coverName }}</span>
      </div>
      <!-- /.cover-name -->
    </div>
    <!-- /.cover-content -->
    <what-i-do />
  </section>
  <!-- /.the-cover -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import TheParticles, { IParticle } from '../components/TheParticles.vue'
import ObjectMatrix, { IRandom } from '../components/ObjectMatrix.vue'
import { RandomNum, ArrayFrom } from '../components/utils'
import _ from 'lodash'
import WhatIDo from './WhatIDo.vue'

@Component({
  components: {
    'the-particles': TheParticles,
    'object-matrix': ObjectMatrix,
    'what-i-do': WhatIDo
  }
})
export default class TheCover extends Vue {
  @Prop({ default: true, type: Boolean })
  private useParticles?: Boolean

  mounted () {
    window.addEventListener('scroll', _.debounce(this.handleScroll, 10))
  }

  beforeDestroy () {
    window.removeEventListener('scroll', _.debounce(this.handleScroll))
  }

  handleScroll (e: Event): void {
    this.scrolled = window.scrollY > (window.innerHeight / 2)
  }

  name: string = 'TheCover'

  randomNum = RandomNum

  arrayFrom = ArrayFrom

  pageTitle = 'What I Do'

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
    { shape: 3, cls: '-tri', scaleMin: 0.5, scaleMax: 1.5, count: 15, animationMin: 15, animationMax: 25 },
    { shape: 4, cls: '-rect', scaleMin: 0.5, scaleMax: 2, count: 7, animationMin: 15, animationMax: 25 },
    { shape: 5, cls: '-penta', scaleMin: 0.5, scaleMax: 2, count: 12, animationMin: 15, animationMax: 25 }
  ]

  scrolled: boolean = window.scrollY > window.innerHeight / 2

  staticBlocks: any[] = [
    { width: 482 },
    { width: 236 },
    { width: 343 },
    { width: 548 }
  ]
}

</script>

<style lang="scss">
section.the-cover {
  width: 100vw;
  min-height: 100vh;
  background-color: var(--cx-manilla);
  position: relative;
  transition: .8s ease-out background-color;
  &.-scrolled {
    background-color: var(--cx-white);
  }
  @keyframes block-x-scales {
    0% {
      transform: scaleX(0) translateX(-10px);
      opacity: 0;
    }
    20% {
      transform: scaleX(.7);
      opacity: .4;
    }
    90% {
      transform: scaleX(1);
      opacity: .5;
    }
    100% {
      transform: scaleX(0) translateX(10px);
    }
  }
  .the-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
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
  .cover-content {
    min-height: 100vh;
    .content-title {
      --line-height: 80px;
      top: 100px;
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
        z-index: 2;
        display: block;
        position: relative;
        @mixin block-style () {
          display: block;
          height: var(--line-height);
          background-color: var(--cx-dark-cream);
          opacity: .4;
        }
        .block-item {
          @include block-style;
          animation-name: block-x-scales;
          animation-timing-function: ease;
          animation-iteration-count: infinite;
        }
        .blocks-static {
          position: absolute;
          top: 160px;
          left: 320px;
          @for $n from 1 through 4 {
            .static-item:nth-of-type(#{$n}) {
              @include block-style;
            }
          }
        }
      }
      .title-message-base {
        font-weight: 300;
        position: relative;
        z-index: 5;
        .title-message-main {
          font-size: 75px;
          position: absolute;
          font-weight: 900;
          top: var(--line-height);
          left: 390px;
        }
      }
    }
    .content-name {
      margin-top: 150px;
      .name {
        font-family: 'Raleway';
        font-weight: 900;
        font-size: 30px;
        display: flex;
        vertical-align: middle;
        justify-content: center;
        &:before {
          display: block;
          width: 50vw;
          margin-right: 20px;
          content: '';
          border-bottom: 1px solid var(--c-text);
        }
      }
    }
  }
}
</style>
