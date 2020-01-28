<template>
  <section class="what-i-did">
    <project-item
      class="-cmp"
      :title="`CLOUD\nMANAGEMENT\nPORTAL`"
      client="SHINSEGAE"
      duration="2019.06 - 2019.12"
    >
      <content-block
        title="My Role"
        :content="['기획', 'UI 디자인 전체', '프론트엔드 개발 리딩', '코어 컴포넌트 개발']"
      />
      <content-block
        title="Tech"
        :content="['Vue.js', 'VueX', 'SCSS', 'RS-CSS', 'Chart.js', 'Buefy']"
      />
      <content-block
        title="Description"
        :use-slot="true"
      >
        {{ projects.cmp }}
      </content-block>
    </project-item>

    <project-item
      class="-miip"
      :title="`Manufacture\nInfra\nIntelligence\nPlatform`"
      client="SK HOLDINGS"
      duration="2019.06 - 2019.12"
    >
      <content-block
        title="My Role"
        :content="['프론트엔드 개발 리딩', '코어 컴포넌트 개발', '화면 개발', '테크니컬 라이팅']"
      />
      <content-block
        title="Tech"
        :content="['Vue.js', 'VueX', 'SCSS', 'JSX', 'RS-CSS', 'Buefy', 'VuePress', 'SockJS', 'Stomp', 'Wijmo']"
      />
      <div class="chart-container">
        <div class="item" />
      </div>
      <!-- /.chart-container -->
      <content-block
        title="Description"
        :use-slot="true"
      >
        {{ projects.miip }}
      </content-block>
    </project-item>

    <project-item
      class="-leavon"
      title="LEAVON"
      client="GROWTH"
      duration="2017.11 - 2018.04"
    >
      <content-block
        title="My Role"
        :content="['기획', 'UI 디자인 전체', '프론트엔드 개발 전체']"
      />
      <content-block
        title="Tech"
        :content="['Vue.js', 'VueX', 'SCSS', 'RS-CSS', 'Canvas', 'Fabric.js', 'Android WebView', 'Google Places API', 'Firebase']"
      />
      <content-block
        title="Description"
        :use-slot="true"
      >
        {{ projects.leavon }}
      </content-block>
    </project-item>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ProjectItem from '../components/ProjectItem.vue'
import ContentBlock from '../components/ContentBlock.vue'

@Component({
  components: {
    'project-item': ProjectItem,
    'content-block': ContentBlock
  }
})
export default class WhatIDid extends Vue {
  projects = {
    cmp: '신세계 그룹사의 통합 클라우드 포털 개발 프로젝트. 그룹사 전체에서 사용되는 구형 서버 관리/설치 시스템을 클라우드화 하기 위해 진행되었습니다.\n\n클라이언트 측은 기존 Flex로 개발되어있던 클라우드 관리 포털을 웹 기반으로 변경하여 접근성을  높이고, 서비스의 이용 현황과 각 VM과 물리머신의 사용 현황을 한눈에 파악하고자 하는 니즈를 가지고 있었습니다.\n\n먼저, 기획은 Sketch를 이용해 간단히 플로우차트를 그려 1차 정리를 하였습니다.  그리고 각 화면의 와이어프레임을 그려 각 버튼과 인터랙션 가능한 오브젝트에 모두 링크를 걸어  Prototyping 처리를 하였습니다. 덕분에 클라이언측과 백엔드 개발자들도 기획서를 쉽게 이해하고 전체 서비스의 플로우를 체크해보면서 빠르게 개발을 진행할 수 있었습니다.\n\nUI 디자인 역시 스케치를 통해 진행하였고, Zeplin을 통해 Export하여 마크업까지 편리하게 진행되도록 하였습니다.\n\n프론트엔드 프레임워크는 Vue.js를 사용하였습니다. Chart.js를 이용해 VM과 물리머신들의 이용 현황등을 시각화하여 문제가 있는 서비스등을 빠르게 파악할 수 있도록 하였습니다. Chart.js에서 지원되지 않는 형태의 차트들은 추가 개발해 적용 하였습니다.\n\n전체 UI Framework은 Buefy + Bulma 를 이용하였습니다. CSS는 RSCSS 방법론 베이스의 SCSS를 작성, Vue SFC에 통합하여 스타일 충돌이 최소화되도록 하였습니다.',
    miip: `SK Hynix를 비롯한 SK 그룹사의 제품 생산 공정에서 사용하기 위해 개발한 제조 관리 소프트웨어 입니다.\n\n경쟁 입찰 프로젝트였으며,  제안 단계부터 참여해 프론트엔드 프레임워크 선정부터 전반적인 구조 설계와 코어 컴포넌트와 상세 화면 개발을 비롯한 전체 개발 리딩 역할을 담당했습니다.\n\n기존의 제조 관리 소프트웨어는 C#으로 개발되어 있었습니다. 클라이언트는 전체 소프트웨어의 통합된 UX는 물론, 명확한 디펜던시 관리와 안정적인 개발/배포를 위해 웹 기반의 클라우드 소프트웨어를 개발하고자 하였습니다.\n\n프로젝트의 볼륨이 매우 커서 SK주식회사 내부 개발팀 분들과 함께 개발을 진행해야 했습니다만, SK 의 개발팀 구성원들은 대부분 C# 개발자들로 이루어져 있어 Javascript를 비롯한 웹 기술에 대한 이해가 부족한 상황이었습니다.\n\n따라서 개발 효율의 극대화를 위해 쉽게 재사용 할 수 있는 코어 컴포넌트의 개발이 필수적이었습니다.   또한 JS를 처음 사용하는 개발자들도 쉽게 따라할 수 있도록  상세하게 주석이 달린 가이드 화면과, 스텝 바이 스텝으로 쉽게 따라 개발 할 수 있도록 개발문서를 작성하여 전체 개발팀원들이 빠른 속도로 Javascript를 익히고 안정적인 개발을 할 수 있도록 지원하였습니다.\n\n기획 문서에는 Chart와 Data Grid가 굉장히 많이 들어가있었고 요구되는 기능도 굉장히 많았기에 안정적인 개발을 위해 Wijmo 를 도압하였습니다.\n\n하지만, 클라이언트측이 요구하던 aggregation을 비롯한 데이터와 차트의 디테일한 컨트롤등은 wijmo에서 지원되지 않는 기능이었습니다. 따라서 이를 경험이 부족한 개발자들도 사용할 수 있도록, 차트와 그리드를 Wrapping해, 요청되는 기능들을 props와 method로 쉽게 사용할 수 있도록 개발하였습니다.\n\n차트와 그리드의 퍼포먼스 또한 주요 이슈였습니다. 클라이언트측은 차트에 100,000 ~ 300,000 건의 데이터가 표시되고, 이것이 가능하면 빠른 시간 안에 화면에 표시되고, 브라우저가 안정적으로 동작하길 원했습니다.\n\n퍼포먼스를 최대한 끌어올리기 위해 브라우저의 Performance 분석 데이터를 통해 각 펑션이 실행되는데 소요되는 시간들을 분석하고 문제가 되는 주요 펑션들의 로직을 분석 & 개선한 결과 수십만건의 데이터를  그리드에 표시하는데 소요되는 시간을 0-2 초 이내로 단축시킬 수 있었습니다.`,
    leavon: `사내 프로젝트로 진행했던 여행 로그 APP.\n 구글의 Places API로 유저가 선택한 사진들을 분석해  자동으로 위치와 주요 장소등을 매칭시킵니다.\n\n그리고, 이-쁜 레이아웃으로 각 장소별 사진들을 모아서 공유할 수 있도록 개발 하였습니다. 기능 구현 자체는 완료 하였지만, 회사의 SI 프로젝트 일정 관계로 출시까지 이르지는 못했습니다.\n\n팀 구성원의 스킬셋에 맞도록 유연하고 빠른 개발을 위해 Vue.js 기반의 모바일 웹 + 안드로이드 웹 뷰의 프론트엔드와 Google Firebase + Firebase Functions 백엔드 구조로 개발되었습니다.\n\n사진의 업로드 + 편집 + 공유 라는 단순한 과정이지만, Leavon 앱에서는 내부적으로 복잡한 단계를 거쳐 하나의 여행기가 작성됩니다.  수십장의 사진을 읽어들여 메타데이터를 분석하고, 이미지를 리사이즈 하여 화면에 보기좋게 표시합니다. 그리고 Canvas를 이용해 이펙트를 넣어 사진을 편집합니다.\n\n 구글 API로 사진 메타데이터의 좌표 정보를 보내, 장소 정보를 얻어내고, 그 장소 정보로 사진들을 그루핑하여 블럭을 만듭니다. 각 장소 블럭의 레이아웃을 선택, 편집하고 본문 내용등을 작성하는 과정을 빠르고 부드럽게, UX적으로 올바르도록, 사용자가 자연스럽게 사용할 수 있는 UI Flow와 화면 레이아웃을구성하고, 모든 기능들이 빠르고 자연스럽게 동작할 수 있도록 노력하였습니다.`
  }
}
</script>

<style lang="scss">
section.what-i-did {
  .project-item {
    &.-cmp {
      .section-image {
        background-image: url('../assets/images/cmp.jpg');
      }
    }
    &.-miip {
      background-color: var(--cx-miip-slate);
      color: var(--cx-white);
      .divider {
        background-color: var(--cx-white);
      }
      .chart-container {
        height: 150px;
        overflow: visible;
        position: relative;
        .item {
          position: absolute;
          bottom: 0;
          background-image: url('../assets/images/miip.svg');
          background-size: contain;
          background-position: bottom center;
          width: calc(100vw - 200px);
          height: 100vh;
          background-repeat: no-repeat;
        }
      }
    }
    &.-leavon {
      .section-image {
        background-image: url('../assets/images/leavon.jpg');
      }
    }
    .content-block {
      margin-bottom: 50px;
    }
  }
}

</style>
