<template>
  <section class="content-block">
    <div class="block-title">
      {{ title }}
    </div>
    <div class="block-desc">
      <slot v-if="useSlot" />
      <ul
        class="desc-list"
        v-else
      >
        <li
          class="list-item"
          v-for="item in contentArr"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
  <!-- /.content-block -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ContentBlock extends Vue {
  @Prop({ default: '' })
  readonly title!: string

  @Prop({ default: () => [''] })
  readonly content!: string | string[]

  @Prop({ default: false })
  readonly useSlot!: boolean

  get contentArr (): string[] {
    if (Array.isArray(this.content)) return this.content
    return [this.content]
  }
}
</script>

<style lang="scss">
section.content-block {
  .block-title {
    font: 800 26px /30px'Raleway';
  }
  .block-desc {
    margin-top: 10px;
    font: 300 20px /1.8 'Noto Sans Korean';
    white-space: pre-line;
    .desc-list {
      display: flex;
      flex-wrap: wrap;
      .list-item:not(:last-of-type) {
        margin-right: 30px;
      }
    }
  }
  @media screen and (max-width: 960px) {
    .block-title {
      font-size: 22px;
    }
    .block-desc {
      font-size: 15px;
    }
  }
}
</style>
