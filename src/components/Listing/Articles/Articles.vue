<template>
  <div class="articles">
    <!-- Do a for loop to go through all articles that we fetch -->
    <Item v-for="post in posts"
          :key="post.id"
          :imageName="firstImage"
          :title="post.title"
          :body="post.body"
          articleType="Portrait" />
    <!-- Do a for loop to go through all articles that we fetch -->
  </div>
</template>

<style lang="scss">
  .articles {
    margin-top: 128px;
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
      response.json().then((data) => {
        this.posts = data;
      });
    });
  },
};
</script>
