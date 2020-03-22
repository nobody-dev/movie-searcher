<template>
  <span class="movie__rating">Рейтинг: {{movieRating}}</span>
</template>

<script>
  export default {
    props: {
      movieRating: Number,
    }
  };
</script>

<style lang="scss">
  .movie__rating {

  }
</style>
