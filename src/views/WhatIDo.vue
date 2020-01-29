<template>
  <section class="what-i-do the-page">
    <h2 class="page-title">
      {{ pageTitle }}
    </h2>
    <article class="page-body">
      <div class="body-section -development">
        <h3 class="section-title">
          Frontend Development
        </h3>
        <div class="section-desc">
          펑셔널하며, 모던한 문법으로 작성된,<br>
          실행시 최적의 퍼포먼스를 보여주는,<br>
          가독성이 좋고, 간결한 코드를 추구합니다.
        </div>
        <!-- /.desc -->
        <spec-items
          class="spec-items"
          title="Languages"
          :specs="['HTML', 'Javascript', 'Typescript', 'SCSS']"
        />
        <spec-items
          class="spec-items"
          title="Tools"
          :specs="['VSCode', 'Sourcetree', 'Github', 'iTerm2', 'Paste', 'ESLint', 'Vetur', 'Quokka', 'Forklift3', 'Kaleidoscope', 'Postman']"
        />
        <spec-items
          class="spec-items"
          title="Frameworks &amp; Libraries"
          :specs="['Vue.js', 'VueX', 'ReactNative', 'MobX', 'Babel', 'Axios', 'SockJS', 'Stomp', 'Fabric', 'Konva', 'Buefy', 'Bulma', 'Wijmo', 'lodash', 'dayjs', ' MateialDesignIcons', 'Firebase']"
        />
      </div>
      <!-- /.body-section -->

      <div class="body-section -design">
        <h3 class="section-title">
          UI Design
        </h3>
        <div class="section-desc">
          사용성을 최우선시 하며,<br>
          UI, UX의 기본 원칙을 서비스에 잘 적용시켜<br>
          유저의 혼돈을 최소화 하는 UI를 디자인 하려 합니다.
        </div>
        <!-- /.desc -->
        <spec-items
          class="spec-items"
          title="Design Category"
          :specs="['Web UI', 'Moile App UI', 'Icon', 'Branding']"
        />
        <spec-items
          class="spec-items"
          title="Tools"
          :specs="['Sketch', 'Sketch Runner', 'Phhotoshop', 'Zeplin', 'Illustrator']"
        />
      </div>
      <!-- /.body-section -->
    </article>
    <!-- /.page-body -->
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SpecItems from '../components/SpecItems.vue'

@Component({
  components: {
    'spec-items': SpecItems
  }
})
export default class WhatIDo extends Vue {
  pageTitle = 'WHAT I DO'
}
</script>

<style lang="scss">
section.what-i-do {
  --section-title-size: 40px;
  --section-desc-font: 300 20px /36px 'Noto Sans Korean';

  position: relative;
  .page-body {
    display: flex;
    margin: 0 -25px;
    .body-section {
      flex: 1 1 50%;
      padding: 0 25px;
      .section-title {
        font-family: 'Raleway';
        font-size: var(--section-title-size);
        font-weight: 900;
      }
      .section-desc {
        font: var(--section-desc-font);
        margin-top: 10px;
      }
      .spec-items {
        margin-top: 50px;
      }
    }
  }
  @media screen and (max-width: 960px) {
    --section-title-size: 40px;
    --section-desc-font: 300 15px /30px 'Noto Sans Korean';

    .page-body {
      flex-direction: column;
      .body-section {
        flex-basis: 100%;
        margin-bottom: 150px;
      }
    }
  }
}
</style>
