<template>
  <div class="router">
    <router-link class="router__links" to="/">Home</router-link>
    <router-link class="router__links" to="/listing">Listing</router-link>
  </div>
</template>

<style lang="scss">
  .router {
    width: calc(100% / 3);

    &__links {
      margin: 0 20px;
      color: #444952;
      font-size: 14px;
      text-transform: uppercase;
      text-decoration: none;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    @media (max-width: 768px) {
      a {
        display: none;
      }
    }
  }
</style>

<script>
export default {
  name: 'HeaderLeft',
};
</script>
