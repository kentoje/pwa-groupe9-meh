<template>
  <footer>
    <hr>
    <div class="top">
      <span><img class="flag" v-lazy="flag" alt="drapeau Français"/>France</span>
      <span @click="scrollToTop()">Retour en haut
        <img class="arrow" v-lazy="arrow" alt="flèche haut"/>
      </span>
    </div>
    <div class="content">
      <div>
        <p class="title">LE STONE BALANCING</p>
        <p>INTRODUCTION DES PIERRES</p>
        <p>COMMENT BIEN COMMENCER</p>
        <p>NOS EXPERIENCES</p>
      </div>
      <div>
        <p class="title">NOTRE HISTOIRE</p>
        <p>ENRACINÉS DANS L’EXCELLENCE</p>
        <p>NOTRE HISTOIRE</p>
        <p>PROTECTION DE LA NATURE</p>
      </div>
      <div>
        <p class="title">TENEZ VOUS INFORMÉ</p>
        <p>FACEBOOK</p>
        <p>TWITTER</p>
        <p>INSTAGRAM</p>
        <p>NOUS CONTACTER</p>
      </div>
    </div>
    <p class="author">Mounir LOUERAD | Kento MONTHUBERT | Virgil LIMONGI</p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  margin: 150px 187px 0px 187px;

  hr {
    border: 1px solid #E0E0E0;
  }

  .top {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    width: 90%;
    margin-top: 70px;
    margin-bottom: 70px;

    img {
      vertical-align: middle;
    }

    span {
      cursor: pointer;
    }

    .arrow {
      margin-left: 10px;
    }

    .flag {
      margin-right: 10px;
    }

    span:last-child {
      font-weight: bold;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    width: 90%;

    .title {
      font-weight: bold;
      font-size: 12px;
      color: black;
      margin-bottom: 50px;
    }

    p {
      font-size: 12px;
      color: #353535;
      margin-bottom: 25px;
      cursor: pointer;
    }
  }

  .author {
    font-size: 12px;
    color: #8D8D8D;
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    margin: 150px 10% 0px 10%;
  }

  @media (max-width: 768px) {
    margin: 150px 25px 0px 25px;

    .top {
      width: 100%;
    }

    .content {
      display: inherit;
      width: 100%;

      p {
        font-size: 10px;
      }

      .title {
        margin-bottom: 30px;
        font-size: 10px;
      }

      div {
        margin-bottom: 50px;
      }
    }
  }
}
</style>

<script>
import flag from '@/assets/images/flag.png';
import arrow from '@/assets/images/arrow.png';

export default {
  name: 'Footer',
  data() {
    return {
      flag,
      arrow,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
