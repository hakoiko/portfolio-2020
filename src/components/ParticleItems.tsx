import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'
import SvgShapes from './SvgShapes'

/**
 * 파티클의 속성을 정의합니다.
 * shape: 3 ~ 6 사이의 정수입니다. 3각형 - 6각형
 * class: 해당 파티클에 지정할 css class
 * count: 파티클을 지정한 수만큼 생성합니다.
 *
 * @export
 * @interface ParticleProp
 */
export interface ParticleProp {
  shape: string,
  class: string,
  count: number
}

console.log('SvgShapes:', SvgShapes)

@Component
export default class ParticleItems extends Vue {
  /**
   * 파티클 설정을 받습니다.
   *
   * @private
   * @type {ParticleProp[]} 파티클 정보들을 Array로 수신합니다.
   * @memberof ParticleItems
   */
  @Prop({
    default: [
      { shape: 'triangle', class: '-tri', count: 15 }
    ]
  }) private particles!: ParticleProp[]

  /**
   * ParticleProp에 해당하는 Particle들을 생성합니다.
   *
   * @param {ParticleProp} particle 파티클 생성 옵션
   * @returns {VNode} JSX를 리턴합니다.
   * @memberof ParticleItems
   */
  drawParticles (h: CreateElement, particle: ParticleProp): VNode[] {
    let shapes: VNode[] = []

    for (let i = 0; i < particle.count; i++) {
      shapes.push(SvgShapes[particle.shape](h, particle.class))
    }

    return shapes.map(shape => shape)
  }

  /**
   * 파티클들이 그려진 VNode를 생성해 리턴합니다.
   *
   * @param {CreateElement} h
   * @returns {VNode}
   * @memberof ParticleItems
   */
  render (h: CreateElement): VNode {
    return (
      <section class="particle-items">
        { this.particles.map(particle => {
          return this.drawParticles(h, particle)
        }) }
      </section>
    )
  }
}
