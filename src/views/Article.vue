<template>
  <div class="article" v-if="post">
    <h1 class="article__type">Article</h1>
    <!-- {{ $route.params.slug }} -->
    <h2 class="article__title">{{ post.title }}</h2>
    <div class="article__author">
      <img class="article__author--icon" :src="firstImage" alt="Image">
      <div>
        <p class="article__author--name">Emilie Clarck</p>
        <p class="article__author--date">10 mai 2020 . 10 min de lecture</p>
      </div>
    </div>
    <img class="article__image" :src="secondImage" alt="Image">
    <p class="article__text">{{post.body}}</p>
  </div>
</template>

<style scoped lang="scss">

.article {
  $root: &;

  padding: 0px 20% 0px 20%;

   &__type {
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 8px;
    color: #444952;
  }

  &__title {
    font-size: 40px;
    margin-bottom: 30px;
    color: #444952;
  }

  &__author {
    display: flex;
    margin-bottom: 40px;
    &--icon {
      border-radius: 50%;
      width: 55px;
      height: 55px;
      object-fit: cover;
    }

    & > div {
      margin: auto 0px auto 15px;
    }

    &--name, &--date {
      font-size: 14px;
    }

    &--name {
      color: #444952;
      margin-bottom: 5px;
    }

    &--date {
      color: #949494
    }
  }

  &__image {
    width: 100%;
    margin-bottom: 90px;
  }

  &__text {
    font-size: 16px;
    color: #444952;
  }

  @media (max-width: 768px) {
    padding: 0px 25px 0px 25px;

    &__type {
      font-size: 10px;
    }

    &__title  {
      font-size: 30px;
      margin-bottom: 40px;
    }

    &__author--name, &__author--date {
      font-size: 12px;
    }

    &__image {
      margin-bottom: 40px;
    }

    &__text {
      font-size: 14px;
    }
  }
}

</style>

<script>
import firstImage from '@/assets/images/image1.jpg';
import secondImage from '@/assets/images/image2.jpg';

export default {
  created() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.slug}`)
      .then((response) => {
        response.json()
          .then((data) => {
            this.post = data;
          });
      });
  },
  data() {
    return {
      post: null,
      firstImage,
      secondImage,
    };
  },
};
</script>
