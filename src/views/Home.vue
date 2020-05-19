<template>
  <div class="home">
    <div class="firstView">
      <img v-lazy="home1" alt="photo cailloux" />
      <div class="content">
        <p class="type">Article<p>
          <svg width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6L5.58579 1.41421C6.36683 0.633166 7.63316
             0.633165 8.41421 1.41421L11.5858 4.58579C12.3668
              5.36683 13.6332 5.36684 14.4142 4.58579L17.5858
               1.41421C18.3668 0.633166 19.6332 0.633165 20.4142 1.41421L25 6" stroke="#444952"/>
          </svg>
        <p class="title">Calme et sénérité</p>
        <p class="text">Lorem ipsum dolor sit amet, consectetur
        adipiscing elitLorem ipsum dolor sit amet ... <p>
        <p class="more">LIRE</p>
      </div>
    </div>
    <div class="famous">
      <div></div>
      <p>Populaire</p>
    </div>
    <div class="famousArticles">
      <div class="secondView">
      <img v-lazy="home2" alt="photo cailloux" />
      <div class="content">
        <p class="type">Portrait<p>
          <svg width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6L5.58579 1.41421C6.36683 0.633166 7.63316
             0.633165 8.41421 1.41421L11.5858 4.58579C12.3668
              5.36683 13.6332 5.36684 14.4142 4.58579L17.5858
               1.41421C18.3668 0.633166 19.6332 0.633165 20.4142 1.41421L25 6" stroke="#444952"/>
          </svg>
        <p class="title">Jhon Hilton</p>
        <p class="text">Lorem ipsum dolor sit amet,
           consectetur adipiscing elitLorem ipsum dolor sit amet ... <p>
        <p class="more">LIRE</p>
      </div>
    </div>
    <div class="thirdView">
      <img v-lazy="home3" alt="photo cailloux" />
      <div class="content">
        <p class="type">Article<p>
          <svg width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6L5.58579 1.41421C6.36683 0.633166 7.63316
             0.633165 8.41421 1.41421L11.5858 4.58579C12.3668
              5.36683 13.6332 5.36684 14.4142 4.58579L17.5858
               1.41421C18.3668 0.633166 19.6332 0.633165 20.4142 1.41421L25 6" stroke="#444952"/>
          </svg>
        <p class="title">Garder l’équilibre</p>
        <p class="text">Lorem ipsum dolor sit amet, consectetur
        adipiscing elitLorem ipsum dolor sit amet ... <p>
        <p class="more">LIRE</p>
      </div>
    </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  margin: 200px 194px;

  .firstView {
    margin-bottom: 65px;
    width: 100%;
    position: relative;
  }

  .content {
    background-color: white;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    bottom: 10%;
    text-align: center;
    padding: 15px 40px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  .type {
    color: #444952;
    font-size: 12px;
    text-transform: uppercase;
  }

  .title {
    color: #444952;
    font-size: 36px;
  }

  .text {
    color: #444952;
    font-size: 16px;
    margin: 20px 0px;
  }

  .more {
    color: #444952;
    font-size: 14px;
    text-transform: uppercase;
  }

  svg {
    margin: 10px 0px;
  }

  .famous {
    position: relative;

    div {
      height: 1px;
      width: 100%;
      background-color: #C4D0E5;
    }

    p {
      text-transform: uppercase;
      color: #444952;
      font-size: 36px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      padding: 0px 20px;
      bottom: 50px;
      bottom: -17px;
    }
  }

  .famousArticles {
    margin-top: 65px;
    display: flex;
    justify-content: space-between;

    .secondView, .thirdView {
      width: 45%;
      position: relative;
    }
  }

  @media (max-width: 1024px) {
    margin: 200px 10%;
  }

  @media (max-width: 768px) {
    margin: 150px 25px;

    .famousArticles {
      display: block;

      .secondView, .thirdView {
        width: 100%;
      }

      .secondView {
        margin-bottom: 40px;
      }
    }

    img {
      height: 75vh;
    }

    .type {
      font-size: 12px;
    }

    .title {
      font-size: 26px;
    }

    .text {
      font-size: 14px;
    }

    .more {
      display: none
    }
  }
}
</style>

<script>
import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';

export default {
  name: 'Home',
  data() {
    return {
      home1,
      home2,
      home3,
    };
  },
};
</script>
