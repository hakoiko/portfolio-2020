<template>
  <section class="other-projects the-page">
    <h2 class="page-title">
      OTHER PROJECTS
    </h2>
    <project-list
      v-for="(list, year) in projects"
      :key="year"
      :title="year"
      :items="list"
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ProjectList from '../components/ProjectList.vue'

@Component({
  components: {
    'project-list': ProjectList
  }
})
export default class OtherProjects extends Vue {
  projects = {
    '2011': [
      {
        title: `LONDON 2012 WOW`,
        client: `삼성전자/LOCOG`,
        desc: `2012 런던 올림픽 조직위 / 자원봉사자를 위한 모바일 앱 팩키지.\n앱의 UI 디자인과 쉡서비스의 HTML/CSS 마크업 담당`
      },
      {
        title: `SMART BRANCH`,
        client: `외환은행`,
        desc: `외환은행 스마트 키오스크 시스템\nUI 디자인과 ActionScript 개발`
      }
    ],
    '2012': [
      {
        title: `SMART WALLET`,
        client: `SK 플래닛`,
        desc: `멤버십과 포인트 관리, 모바일 결제 서비스. UI 디자인, 웹 프론트엔드 개발`
      }
    ],
    '2013': [
      {
        title: `HANA CAPITAL SUPPORT`,
        client: `하나캐피탈`,
        desc: `하나캐피탈의 고객 상담 지원 앱. HTML/CSS 마크업 담당`
      },
      {
        title: `ETUDE BEAUTY CAMPUS`,
        client: `아모레퍼시픽`,
        desc: `에뛰드 하우스의 알바 "스위티"들의 빠른 교육을 위한 앱. HTML 마크업`
      },
      {
        title: `THE CELEBRITY`,
        client: `디자인하우스`,
        desc: `웹 매거진 THE CELEBRITY의 UI 개발`
      },
      {
        title: `HANA CARD`,
        client: `하나카드`,
        desc: `하나카드 대 고객용 앱. UI 디자인과 HTML/CSS 마크업`
      },
      {
        title: `G-CAR`,
        client: `도이치 모터스`,
        desc: `도이치모터스의 웹 포탈. UI 개발`
      }
    ],
    '2014': [
      {
        title: `GAME CAST`,
        client: `삼성전자`,
        desc: `트위치와 같은 게임 영상 공유/중계 플랫폼. 모바일 웹 UI 마크업, 관리자 사이트의 UI 디자인, 프론트엔드 개발`
      }
    ],
    '2015': [
      {
        title: `BAAS`,
        client: `SK 텔레콤`,
        desc: `Firebase와 유사한, node.js와 mongoDB를 이용한 클라우드 백엔드 플랫폼.\n
node.js를 이용한 서버 개발과 프론트엔드 SDK 개발`
      }
    ],
    '2016': [
      {
        title: `GROWTH OBSERVER`,
        client: `그로스 / 코레일`,
        desc: `코레일의 전체 서버 관리/모니터링을 위한 서비스. UI 디자인, Frontend 개발`
      },
      {
        title: `AETHER`,
        client: `그로스`,
        desc: `오픈스택을 이용한 VM 관리 서비스. UI 디자인, 프론트엔드 개발`
      }
    ],
    '2018': [
      {
        title: `IBK NEXTGEN`,
        client: `IBK 기업은행`,
        desc: `기업은행의 차세대 플랫폼. 프론트엔드 개발`
      },
      {
        title: `CLOUD Z`,
        client: `SK 주식회사`,
        desc: `SK의 클라우드서비스 CloudZ중 Postgre서비스 POC. 프론트엔드 개발.`
      }
    ],
    '2019': [
      {
        title: `SMC`,
        client: `삼성전자`,
        desc: `AWS와 같은 삼성전자 자체 클라우드 서비스. UI 디자인과 프론트엔드 개발`
      },
      {
        title: `지식뱅크`,
        client: `대한상공회의소`,
        desc: `국내 유통중인 모든 상품을 바코드를 이용해 조회할 수 있는 앱. ReactNative를 이용한 앱 개발`
      }
    ]
  }
}
</script>

<style lang="scss">
section.other-projects {
  position: relative;
  .project-list {
    margin-bottom: 100px;
  }
}
</style>
