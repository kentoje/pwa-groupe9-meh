<template>
  <router-link :to="`/article/${id}`" class="item">
    <div class="item__media">
      <img class="item__image" :src="imageName" alt="Image">
    </div>
    <div class="item__details">
      <h3 class="item__type">{{ articleType }}</h3>
      <h2 class="item__title">{{ title }}</h2>
      <p class="item__text">{{ body }}</p>
      <div class="item__link">
        <span class="item__button">Lire l'article</span>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss">
  .item {
    $root: &;

    display: flex;
    align-items: center;
    max-height: 296px;
    margin-top: 340px;
    text-decoration: none;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 136px;
    }

    &__media {
      position: relative;
      width: 50%;
      padding-top: 34%;
      overflow: hidden;

      #{$root}__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__details {
      display: flex;
      flex-direction: column;
      width: 50%;
      height: 85%;
      margin-left: 64px;
      color: #444952;

      #{$root}__type {
        font-size: 14px;
        text-transform: uppercase;
      }

      #{$root}__title {
        display: -webkit-box;
        margin-top: 24px;
        font-size: 36px;
        text-transform: uppercase;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      #{$root}__text {
        margin-top: 24px;
        font-size: 14px;
        line-height: 1.65;
      }

      #{$root}__link {
        margin-top: 40px;

        #{$root}__button {
          padding: 12px 36px;
          color: #444952;
          background-color: #B7D6EE;
          font-size: 16px;
          text-align: center;
        }
      }
    }
  }
</style>

<script>
export default {
  props: {
    imageName: String,
    title: String,
    articleType: String,
    body: String,
    id: Number,
  },
};
</script>
