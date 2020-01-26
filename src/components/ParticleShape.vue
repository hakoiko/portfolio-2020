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
import { GetTransformStyle } from './utils'

/**
 * 각 파티클 쉐입의 상태를 설정하는 속성입니다.
 *
 * @export
 * @interface IParticleShape
 * @property {Number} shape 파티클의 모서리의 수 (3각형 - 6각형)
 * @property {String} cls 파티클에 할당할 css class
 * @property {top: string, left: string} position 파티클의 위치를 할당할 css position
 * @property {Number} scale 파티클의 사이즈 스케일. 1 = 100%
 * @property {Number} parallaxScale 패럴랙스 스크롤 적용시에 아이템의 이동 스케일
 * @property {Number} animationDuration 애니메이션 적용시 지속시간
 */
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
  /**
   * 파티클 쉐입 속성인 IParticleShape을 받습니다.
   */
  @Prop({ default () {
    return {
      shape: 3, cls: '-tri', styl: {}, scale: 1, parallaxScale: 0
    }
  } })
  readonly shape!: IParticleShape

  /**
   * Parallax 스크롤 적용시 부모 컴포넌트등으로부터 스크롤 컨테이너의 scrollY 값 등을 받습니다.
   */
  @Prop({ default: 0 })
  parallaxBase!: number

  /**
   * 파티클 조각의 transform 스타일을 설정합니다.
   * @return {Object} CSS Transform 스타일을 리턴합니다.
   */
  get sliceTransform (): { [key: string]: string } {
    // this.parallaxBase * this.
    let transform = {
      'rotate': this.shape.rotate
    }
    return GetTransformStyle(transform)
  }

  /**
   * 파티클 조각의 컨테이너인 div의 transform 스타일을 설정합니다.
   * @return {Object} CSS Transform 스타일을 리턴합니다.
   */
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
    return GetTransformStyle({ ...scaleStyle, ...parallaxStyle })
  }

  /**
   * 파티클 아이템에 애니메이션을 사용할 떄, 에니메이션의 속성을 설정합니다.
   * @return {Object} CSS Transform 스타일을 리턴합니다.
   */
  get animation (): { [key: string]: string } {
    return {
      'animation-duration': this.shape.animationDuration + 's',
      'animation-direction': Math.round(Math.random()) ? 'normal' : 'reverse'
    }
  }

  /**
   * transform에 대해서만 merging 해 Object 형태로 반환하는 역할을 합니다.
   * CSS Transform은 하나의 속성에 여라기지 transofrm function이 할당됩니다.
   * 브라우저에서는 css transform 속성을 merging 하지 않습니다. 그래서 이런 절차가 필요합니다.
   *
   * @param {Object} transform { rotate: 30, translateX: -10 } 등의 transform object를 받습니다.
   * @return {Object} { transform: rotate(30deg) translateX(-10px) }의 형태로 반환합니다.
   */
  /* getTransformStyle (
    transform:{ [key: string]: any } = {}
  ): { [key: string]: string } {
    let styleArr: string[] = []
    const units: { [key: string]: string } = {
      'rotate': 'deg',
      'translateX': 'px',
      'translateY': 'px'
    }
    for (let [key, val] of Object.entries(transform)) {
      if (units[key] && val !== 0) {
        val = val + units[key]
      }
      styleArr.push(`${key}(${val})`)
    }

    return {
      transform: styleArr.join(' ')
    }
  } */
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
