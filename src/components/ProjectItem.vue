<template>
  <section
    class="project-item"
    :class="{ '-on-air': onAir }"
  >
    <div class="page-section -desc">
      <h2 class="page-title">
        WHAT I DID
      </h2>
      <div class="section-head">
        <h3 class="title project-title">
          {{ title }}
        </h3>
        <span class="divider" />
        <div class="client">
          {{ client }}
        </div>
        <div class="duration">
          {{ duration }}
        </div>
      </div>
      <!-- /.section-head -->
      <div class="section body">
        <slot />
      </div>
      <!-- /.section-body -->
    </div>
    <!-- /.page-section -->
    <div
      class="page-section -image"
      v-if="useImage"
    >
      <div
        class="section-image"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import _ from 'lodash'

@Component
export default class ProjectItem extends Vue {
  @Prop({ default: '' })
  readonly title!: string

  @Prop({ default: '' })
  readonly client!: string

  @Prop({ default: '' })
  readonly duration!: string

  @Prop({ default: '' })
  readonly image!: string

  @Prop({ default: true })
  readonly useImage!: boolean

  mounted () {
    this.element = this.$el as HTMLElement
    this.onAir = window.scrollY + window.innerHeight > this.element.offsetTop
    window.addEventListener('scroll', _.debounce(this.handleScroll, 10))
  }

  beforeDestroy () {
    window.removeEventListener('scroll', _.debounce(this.handleScroll))
  }

  handleScroll (e: Event): void {
    this.onAir = window.scrollY + window.innerHeight > this.element.offsetTop
  }

  element: HTMLElement = document.createElement('div')

  onAir: boolean = false
}
</script>

<style lang="scss">
section.project-item {
  --page-desc-padding: 100px;
  --title-font: 900 40px 'Raleway';
  --client-font: 900 30px /35px 'Raleway';

  display: flex;
  &.-on-air {
    .page-section.-image .section-image {
      transform: scale(1);
    }
  }
  .page-section {
    flex: 1 1 50%;
    box-sizing: border-box;
    position: relative;
    &.-desc {
      padding: var(--page-desc-padding);
    }
    &.-image {
      overflow: hidden;
      height: 100vh;
      position: sticky;
      top: 0;
     .section-image {
        height: 100vh;
        background-size: cover;
        transform-origin: center;
        transform: scale(1.2);
        transition: 15s ease-in-out all;
      }
    }
    .section-head {
      margin-bottom: 70px;
      .title {
        white-space: pre-line;
        text-transform: uppercase;
        font: var(--title-font);
      }
      .divider {
        width: 75px;
        height: 5px;
        background-color: var(--c-text);
        display: block;
        margin: 30px 0;
      }
      .client {
        font: var(--client-font);
      }
      .duration {
        font: 900 20px /24px 'Roboto';
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 960px) {
    --page-desc-padding: 50px;
    --title-font: 900 30px 'Raleway';
    --client-font: 900 25px /30px 'Raleway';
    flex-direction: column;

  }
}
</style>
