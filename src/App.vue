<template>
  <div id="app">
    <Header />
    <router-view class="view" />
  </div>
</template>

<style lang="scss">
  #app {
    display: flex;
    justify-content: center;
  }

  .view {
    margin-top: 164px;
  }
</style>

<script>
import Header from '@/components/Header/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
