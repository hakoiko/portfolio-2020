<template>
  <section class="the-particles">
    <particle-shape
      v-for="(particle, index) in particlesArr"
      :key="index"
      :shape="particle"
      :parallax-base="scrollY"
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'
import ParticleShape, { IParticleShape } from './ParticleShape.vue'

/**
* 파티클의 속성을 정의합니다.
* shape: 3 ~ 6 사이의 정수입니다. 3각형 - 6각형
* cls: 해당 파티클에 지정할 css class
* count: 파티클을 지정한 수만큼 생성합니다.
*
* @export
* @interface IParticle
*/
export interface IParticle {
  shape: number,
  cls: string,
  count: number,
  scaleMax: number,
  scaleMin: number,
  animationMin?: number,
  animationMax?: number
  rotate?: boolean,
}

@Component({
  components: {
    'particle-shape': ParticleShape
  }
})
export default class TheParticles extends Vue {
  /**
   * 파티클 설정을 받습니다.
   *
   * @private
   * @type {IParticle[]} 파티클 정보들을 Array로 수신합니다.
   * @memberof IParticle
   */
  @Prop({
    default: [ { shape: 3, cls: '-tri', count: 15, rotate: true } ]
  }) readonly particles!: IParticle[]

  @Prop({
    default: false
  }) readonly useParallax!: boolean

  mounted () {
    if (this.useParallax) {
      window.addEventListener('scroll', this.handleScroll)
      this.scrollY = window.scrollY
    }
  }

  beforeDestroy () {
    if (this.useParallax) window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e: Event): void {
    this.scrollY = window.scrollY
  }

  /**
   * 최대값 - 최소값 사이의 숫자를 리턴합니다.
   * @function
   * @param  {Number} min 최대값
   * @param  {Number} max 최소값
   * @param  {Number} precesion 소수점단위
   * @return {Number} 최대 - 최소 사이의 정수
   */
  randomNum (min = 0, max = 100, precesion = 0): number {
    let range = max - min
    let n = Math.random() * range + min
    return Number(n.toFixed(precesion))
  }

  /**
   * @function
   * @param {IParticle} particle 생성할 파티클 아이템의 기본속성.
   * @return {Object} style object를 리턴합니다.
   */
  particleStyle (particle: IParticle): { [key: string]: string } {
    let baseStyle = {
      'top': this.randomNum() + '%',
      'left': this.randomNum() + '%'
    }
    return baseStyle
  }

  /**
   * @function
   * @return {IParticleShape[]} 파티클 쉐입 Interface의 Array를 리턴합니다.
   */
  get particlesArr (): IParticleShape[] {
    let result: IParticleShape[] = []
    return this.particles.reduce((acc, particle) => {
      let arr: IParticleShape[] = []
      for (let i = 0; i < particle.count; i++) {
        let shape:IParticleShape = {
          ...particle,
          scale: this.randomNum(particle.scaleMin, particle.scaleMax, 1),
          position: this.particleStyle(particle),
          rotate: particle.rotate === false ? 0 : this.randomNum(0, 180),
          parallaxScale: this.randomNum(0.7, 2.5, 2),
          animationDuration: this.randomNum(particle.animationMin, particle.animationMax)
        }
        arr.push({ ...shape })
      }
      return [...acc, ...arr]
    }, result)
  }

  scrollY:number = 0
}
</script>

<style lang="scss">
  section.the-particles {
    position: relative;
  }

</style>
