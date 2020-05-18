<template>
  <nav class="nav">
    <HeaderLeft class="nav__parts nav__parts--left" />
    <div class="logo">
      <span>Logo</span>
    </div>
    <HeaderRight class="nav__parts nav__parts--right" />
  </nav>
</template>

<style lang="scss">
  .nav {
    position: fixed;
    z-index: 1;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 18px 0;

    &__parts--left {
      margin-left: 180px;
    }

    &__parts--right {
      margin-right: 180px;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(100% / 3);
      font-size: 14px;
    }
  }
</style>

<script>
import HeaderLeft from '@/components/Header/Left/HeaderLeft.vue';
import HeaderRight from '@/components/Header/Right/HeaderRight.vue';

export default {
  name: 'Header',
  components: {
    HeaderLeft,
    HeaderRight,
  },
};
</script>
