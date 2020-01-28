<template>
  <footer class="the-footer the-page">
    <h2 class="page-title">
      CONTACTS
    </h2>
    <div class="social-networks">
      <a
        href="https://github.com/hakoiko"
        target="_blank"
        class="sns-button -github"
      />
      <a
        href="https://instagram.com/clowleed"
        target="_blank"
        class="sns-button -insta"
      />
      <a
        href="mailto:hakoiko@gmail.com"
        target="_blank"
        class="sns-button -email"
      />
    </div>
    <!-- /social-neteworks -->
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TheFooter extends Vue {

}
</script>

<style lang="scss">
footer.the-footer {
  .sns-button {
    width: 40px;
    height: 40px;
    background: no-repeat center;
    display: inline-block;
    margin-right: 20px;
    &.-github {
      background-image: url('../assets/images/github.svg');
    }
    &.-insta {
      background-image: url('../assets/images/instagram.svg');
    }
    &.-email {
      background-image: url('../assets/images/email.svg');
    }
  }
}
</style>
