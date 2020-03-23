<template>
    <div class="movie__image" :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/w342${moviePoster}')` }"></div>
</template>

<script>
  export default {
    props: {
      moviePoster: String,
    }
  };
</script>

<style>
  .movie__image {
    height: 375px;
    width: 250px;
    background-size: contain;
    border-radius: 5px;
    margin: 0 10px 10px 10px;
  }
</style>
