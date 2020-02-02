<template>
  <section class="project-list">
    <div class="list-title">
      {{ title }}
    </div>
    <ul class="the-list">
      <li
        class="list-item"
        v-for="item in items"
        :key="item.title"
      >
        <div class="item-title">
          {{ item.title }}
        </div>
        <div class="item-client">
          {{ item.client }}
        </div>
        <div class="item-desc">
          {{ item.desc }}
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ProjectList extends Vue {
  @Prop({ default: '' })
  readonly title!: string

  @Prop({ default: () => [{}] })
  readonly items!: object[]
}
</script>

<style lang="scss">
section.project-list {
  display: flex;
  position: relative;
  .list-title {
    font: 300 50px /56px 'Roboto';
    height: 56px;
    flex: 1 1 25%;
    position: sticky;
    top: 50px;
    margin-bottom: 100px;
  }
  .the-list {
    flex: 3 3 75%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .list-item {
      flex: 1 1 375px;
      max-width: 375px;
      padding-right: 50px;
      box-sizing: border-box;
      margin-bottom: 100px;
      .item-title {
        font: 900 30px /35px 'Raleway';
      }
      .item-client {
        font: 300 30px /45px 'Noto Sans Korean';
        margin-top: 10px;
      }
      .item-desc {
        font: 300 20px 'Noto Sans Korean';
        margin-top: 10px;
        white-space: pre-line;
      }
    }
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    .list-title {
      position: relative;
      flex-basis: auto;
      top: unset;
      margin-bottom: 30px;
      font-size: 40px;
    }
    .the-list .list-item {
      padding-right: 0;
      .item-title {
        font: 900 24px /30px 'Raleway';
      }
      .item-client {
        font: 300 24px /30px 'Noto Sans Korean';
      }
      .item-desc {
        font-size: 15px;
      }
    }
  }
}
</style>
