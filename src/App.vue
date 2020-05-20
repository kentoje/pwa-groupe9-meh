<template>
  <div id="app">
    <Header class="header" />
    <transition name="fade" mode="out-in">
      <router-view v-if="show" class="view" />
    </transition>
    <Footer class="footer" />
  </div>
</template>

<style lang="scss">
  .header {
    font-family: 'Montserrat', sans-serif;
  }

  .footer {
    font-family: 'Freight', sans-serif;
  }

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
  data() {
    return {
      show: true,
    };
  },
};
</script>
