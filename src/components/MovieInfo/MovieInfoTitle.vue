<template>
  <span class="movie__title">{{movieTitle}}</span>
</template>

<script>
  export default {
    props: {
      movieTitle: String,
    }
  };
</script>

<style lang="scss">
  .movie__title {
    font-size: 25px;
    letter-spacing: -1px;
    padding: 20px;
  }
</style>
