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
            :col-size="matrixBlocks.colSize"
            :rows="matrixBlocks.rows"
            :row-size="matrixBlocks.rowSize"
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
                'transform': `translateX(${randomNum(staticBlocksMargin.min, staticBlocksMargin.max)}px)`,
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


                 '
}`

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

  get isMobile () {
    return this.$store.state.isMobile
  }

  get staticBlocks (): object[] {
    if (this.isMobile) {
      return [
        { width: 240 },
        { width: 82 },
        { width: 152 },
        { width: 245 }
      ]
    } else {
      return [
        { width: 482 },
        { width: 236 },
        { width: 343 },
        { width: 548 }
      ]
    }
  }

  get staticBlocksMargin (): { [k: string]: number } {
    return (this.isMobile) ? { min: -40, max: 40 } : { min: -120, max: 120
    }
  }

  get matrixBlocks (): { [k: string]: number } {
    if (this.isMobile) {
      return {
        colSize: 15,
        rowSize: 30,
        rows: 9
      }
    } else {
      return {
        colSize: 15,
        rowSize: 80,
        rows: 7
      }
    }
  }
}

</script>

<style lang="scss">
section.the-cover {
  --title-line-height: 80px;
  --title-font-size: 65px;
  --title-font-size-l: 75px;
  --title-message-left: 390px;
  --blocks-static-top: 160px;
  --blocks-static-left: 320px;
  --cover-name-size: 30px;

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
    height: 100vh;
    width: 100vw;
    position: relative;
    display: table-cell;
    vertical-align: middle;
    .content-title {
      width: 80vw;
      margin: auto;
      height: calc(var(--title-line-height) * 8);
      position: relative;
      display: flex;
      justify-content: center;
      font-size: var(--title-font-size);
      line-height: var(--title-line-height);
      color: var(--cx-white);
      pre {
        margin: 0;
        font-family: 'Source Code Pro', monospace;
      }
      .title-bg-blocks {
        z-index: 2;
        display: block;
        position: absolute;
        top: 0;
        width: 100vw;
        height: 100%;
        .object-matrix {
          width: 80vw;
          height: 100%;
          margin-left: 10vw;
          overflow: hidden;
        }
        @mixin block-style () {
          display: block;
          height: var(--title-line-height);
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
          top: var(--blocks-static-top);
          width: 100%;
          @for $n from 1 through 4 {
            .static-item:nth-of-type(#{$n}) {
              margin: auto;
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
          font-size: var(--title-font-size-l);
          position: absolute;
          font-weight: 900;
          top: var(--title-line-height);
          left: var(--title-message-left);
        }
      }
    }
    .content-name {
      position: absolute;
      bottom: 150px;
      left: 10vw;
      width: 80vw;
      .name {
        font-family: 'Raleway';
        font-weight: 900;
        font-size: var(--cover-name-size);
        display: flex;
        vertical-align: middle;
        justify-content: center;
        &:before {
          flex: 1 1 auto;
          display: block;
          margin-right: 20px;
          content: '';
          border-bottom: 1px solid var(--c-text);
        }
      }
    }
  }
  @media screen and (max-width: 960px) {
    --title-line-height: 30px;
    --title-font-size: 21px;
    --title-font-size-l: 25px;
    --title-message-left: 124px;
    --blocks-static-top: 60px;
    --blocks-static-left: 95px;
    --cover-name-size: 20px;

    .cover-content {
      height: 80vh;
      .content-title {
        padding-bottom: 90px;
      }
      .content-name {
        position: absolute;
        top: 70vh;
      }
    }
  }
}
</style>
