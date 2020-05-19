<template>
  <div class="articles">
    <Item v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :imageName="secondImage"
          :title="post.title"
          :body="post.body"
          articleType="Portrait" />
  </div>
</template>

<style lang="scss">
  .articles {
    margin: 128px 180px 0 180px;
  }
</style>

<script>
import Item from '@/components/Listing/Articles/Item/Item.vue';
import firstImage from '@/assets/images/image1.jpg';
import secondImage from '@/assets/images/image2.jpg';

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
          this.posts = data;
        });
    });
  },
};
</script>
