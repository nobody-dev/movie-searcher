<template>
  <h2 class="movie__title">{{movieTitle}}</h2>
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
    letter-spacing: 0px;
    padding: 20px;
  }
</style>
