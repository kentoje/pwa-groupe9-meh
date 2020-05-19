<template>
  <div class="articles">
    <div v-for="post in posts" :key="post.id">
      <Item :id="post.id"
            :title="post.title"
            :body="post.body"
            :imageName="getRandomImage()"
            :articleType="getRandomType()" />
    </div>
  </div>
</template>

<style lang="scss">
  .articles {
    margin: 128px 180px 0 180px;

    @media (max-width: 1024px) {
      margin: 128px 10% 10px 10%;
    }

    @media (max-width: 768px) {
      margin: 128px 0px 180px 0px;
    }
  }
</style>

<script>
import Item from '@/components/Listing/Articles/Item/Item.vue';
import getRandomContent from '@/library/methods/randomContent';
import allImages from '@/library/methods/importAllImages';

const ARTICLE_TYPES = [
  'Portrait',
  'Article',
  'Culture',
  'Voyage',
  'Sport',
  'Zen',
];

const ARTICLE_IMAGES = allImages();
const [firstImage, secondImage] = ARTICLE_IMAGES;

const limit = {
  start: 0,
  end: 10,
};

const { start, end } = limit;

export default {
  components: {
    Item,
  },
  data() {
    return {
      firstImage,
      secondImage,
      posts: null,
    };
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/posts/').then((response) => {
      response.json()
        .then((data) => {
          this.posts = data.slice(start, end);
        });
    });
  },
  methods: {
    getRandomType() {
      return getRandomContent(ARTICLE_TYPES);
    },

    getRandomImage() {
      return getRandomContent(ARTICLE_IMAGES);
    },
  },
};
</script>
