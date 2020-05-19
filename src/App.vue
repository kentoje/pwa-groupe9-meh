<template>
  <div id="app">
    <Header />
    <transition name="fade" mode="out-in">
      <router-view v-if="show" class="view" />
    </transition>
    <Footer />
  </div>
</template>

<style lang="scss">
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
