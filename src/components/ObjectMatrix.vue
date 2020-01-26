<template>
  <section class="object-matrix">
    <div
      class="matrix-item"
      v-for="item in matrixItems"
      :key="item.id"
      :style="[item.position, item.transform]"
    >
      <slot :item="item" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { GetTransformStyle } from './utils'
import _ from 'lodash'

export interface IRandom {
  min: number,
  max: number,
  precision?: number
}

@Component
export default class ObjectMatrix extends Vue {
  @Prop({ default: 3 })
  readonly cols!: number

  @Prop({ default: 0 })
  readonly colSize!: number

  @Prop({ default: 3 })
  readonly rows!: number

  @Prop({ default: 0 })
  readonly rowSize!: number

  @Prop({ default: 0 })
  readonly fuzzyX!: number

  @Prop({ default: 0 })
  readonly fuzzyY!: number

  @Prop({ default: 1 })
  readonly presence!: number

  /**
   * fuzzy값을 받아서 random으로 fuzzy에 해당하는만큼의 값을 리턴합니다.
   * ex: fuzzy:10 => -10 ~ 10 사이의 숫자.
   * @function
   * @param {number} fuzzy 랜덤 값의 최대 수
   * @return {number} 계산된 랜덤 수
   */
  fuzziness (fuzzy = 0): number {
    if (fuzzy === 0) return fuzzy
    const direction = Math.round(Math.random()) ? 1 : -1
    return Math.random() * fuzzy * direction
  }

  get matrixItems (): object[] {
    let items = []
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (Math.random() > this.presence) continue
        items.push({
          position: {
            top: row * this.rowSize + 'px',
            left: col * this.colSize + 'px'
          },
          transform: GetTransformStyle({
            translateX: this.fuzziness(this.fuzzyX),
            translateY: this.fuzziness(this.fuzzyY)
          })
        })
      }
    }
    return items
  }
}
</script>

<style lang="scss">
section.object-matrix {
  position: absolute;
  .matrix-item {
    position: absolute;
  }
}
</style>
