<template>
  <section
    class="particle-shape"
    :style="[
      shape.position,
      shapeTransform
    ]"
  >
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
      :class="['particle-slice', shape.cls]"
      :style="[sliceTransform, animation]"
    >
      <g
        v-if="shape.shape === 3"
        :class="['-triangle']"
      >
        <polygon points="10 3 17 15 3 15" />
      </g>
      <g
        v-if="shape.shape === 4"
        :class="['-rectangle']"
      >
        <rect
          x="3"
          y="3"
          width="14"
          height="14"
        />
      </g>
      <g
        v-if="shape.shape === 5"
        :class="['-pentagon']"
      >
        <polygon
          id="Polygon"
          points="10 3 16.6573956 7.83688104 14.1144968 15.663119 5.88550323 15.663119 3.34260439 7.83688104"
        />
      </g>
    </svg>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

export interface IParticleShape {
  shape: number,
  cls?: string,
  position?: { [key: string]: string },
  scale?: number,
  rotate?: number,
  parallaxScale?: number,
  animationDuration?: number
}

@Component
export default class ParticleShape extends Vue {
  @Prop({
    default: () => {
      return {
        shape: 3, cls: '-tri', styl: {}, scale: 1, parallaxScale: 0
      }
    }
  }) readonly shape!: IParticleShape

  @Prop({
    default: 0
  }) parallaxBase!: number

  get sliceTransform (): { [key: string]: string } {
    // this.parallaxBase * this.
    let transform = {
      'rotate': this.shape.rotate
    }
    return this.getTransformStyle(transform)
  }

  get shapeTransform (): { [key: string]: string } {
    let scaleStyle = {
      scale: this.shape.scale
    }
    let parallaxStyle
    if (this.shape.parallaxScale) {
      parallaxStyle = {
        translateY: this.parallaxBase * this.shape.parallaxScale,
        translateZ: 0
      }
    }
    return this.getTransformStyle({ ...scaleStyle, ...parallaxStyle })
  }

  get animation (): { [key: string]: string } {
    return {
      'animation-duration': this.shape.animationDuration + 's'
    }
  }

  getTransformStyle (
    transform:{ [key: string]: any } = {}
  ): { [key: string]: string } {
    let styleArr: string[] = []
    const units: { [key: string]: string } = {
      'rotate': 'deg',
      'translateX': 'px',
      'translateY': 'px'
    }
    for (let [key, val] of Object.entries(transform)) {
      if (units[key] && val > 0) {
        val = val + units[key]
      }
      styleArr.push(`${key}(${val})`)
    }

    return {
      transform: styleArr.join(' ')
    }
  }
}
</script>

<style lang="scss">
section.particle-shape {
  position: absolute;
  .particle-slice {
    @keyframes particle-moves {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    animation-name: particle-moves;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}
</style>
