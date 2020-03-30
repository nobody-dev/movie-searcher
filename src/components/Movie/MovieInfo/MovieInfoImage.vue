<template>
  <img class="movie__image"
    :src="moviePoster ?
      `https://image.tmdb.org/t/p/w342${moviePoster}` :
      `https://thumbs.dfs.ivi.ru/storage15/contents/6/a/a700332f290b273bc1437ae389696c.jpg`"
    alt="Movie poster">
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
    display: block;
    height: 375px;
    width: 250px;
    background-size: contain;
    border-radius: 5px;
    margin: 0 10px 10px 10px;
  }
</style>
