<template>
  <span class="movie__rating">Рейтинг: <strong>{{movieRating}}</strong></span>
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
    padding: 0 7px;
    font-size: 16px;
    position: relative;
    top: 3px;
  }
</style>
