<template>
  <div class="articles">
    <!-- Do a for loop to go through all articles that we fetch -->
    <Item :imageName="firstImage"
          title="L’histoire de notre toute première abonnée."
          articleType="Portrait" />
    <Item :imageName="secondImage"
          title="Manger des pierres aide à la digestion !"
          articleType="Article" />
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
    };
  },
};
</script>
