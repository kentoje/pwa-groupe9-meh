<template>
  <nav class="nav">
    <HeaderLeft class="nav__parts nav__parts--left" />
    <div class="logo">
      <img class="mobile" :src="Logo" alt="logo"/>
      <img class="desktop" :src="LogoDesktop" alt="logo"/>
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
    background-color: white;

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

      .mobile {
        display: none;
      }

      img {
        height: 50px;
      }
    }

    @media (max-width: 1024px) {
      &__parts--left {
        margin-left: 10%;
      }

      &__parts--right {
        margin-right: 10%;
      }
    }

    @media (max-width: 768px) {
      .logo {
        .mobile {
          display: block;
        }
        .desktop {
          display: none;
        }
        img{
          height: 40px;
        }
      }
    }
  }
</style>

<script>
import HeaderLeft from '@/components/Header/Left/HeaderLeft.vue';
import HeaderRight from '@/components/Header/Right/HeaderRight.vue';
import Logo from '@/assets/images/Logo.png';
import LogoDesktop from '@/assets/images/LogoDesktop.png';

export default {
  name: 'Header',
  components: {
    HeaderLeft,
    HeaderRight,
  },
  data() {
    return {
      Logo,
      LogoDesktop,
    };
  },
};
</script>
