<template>
  <div class="listing">
    <div class="listing__text">
      <h1 class="listing__title">Listing</h1>
    </div>
    <Articles />
  </div>
</template>

<style lang="scss">
  .listing {
    $root: &;

    &__text {
      display: flex;
      align-items: center;
      justify-content: center;

      #{$root}__title {
        font-size: 32px;
        text-transform: uppercase;
      }
    }
  }
</style>

<script>
import Articles from '@/components/Listing/Articles/Articles.vue';

export default {
  components: {
    Articles,
  },
};
</script>
