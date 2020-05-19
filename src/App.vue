<template>
  <div id="app">
    <Header />
    <router-view class="view" />
    <Footer />
  </div>
</template>

<style lang="scss">
  /* #app {
    display: flex;
    justify-content: center;
  } */

  .view {
    margin-top: 164px;
  }
</style>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
