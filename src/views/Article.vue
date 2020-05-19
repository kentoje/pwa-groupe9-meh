<template>
  <div>
    <h1>Article</h1>
    {{ $route.params.slug }}
    {{ post }}
  </div>
</template>

<style></style>

<script>
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
    };
  },
};
</script>
