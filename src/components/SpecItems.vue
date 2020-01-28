<template>
  <section class="spec-items">
    <div class="spec-title">
      {{ title }}
    </div>
    <ul class="spec-list">
      <li
        class="list-item"
        v-for="spec in specs"
        :key="spec"
      >
        {{ spec }}
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SpecItems extends Vue {
  @Prop({ default: '' })
  readonly title!: string

  @Prop({ default: () => [] })
  readonly specs!: string[]
}
</script>

<style lang="scss">
section.spec-items {
  .spec-title {
    font: 800 26px /30px'Raleway';
  }
  .spec-list {
    font: 300 20px /40px 'Noto Sans Korean';
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    .list-item:not(:last-of-type) {
      margin-right: 30px;
    }
  }
}
</style>
