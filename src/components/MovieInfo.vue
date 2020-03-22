<template>
  <div class="movie__info">
    <MovieInfoTitle :movieTitle="movieInfo.title"/>
    <div class="movie__content">
      <div class="movie__content_left">
        <MovieInfoImage :moviePoster="movieInfo.poster_path"/>
        <MovieInfoRating :movieRating="movieInfo.vote_average"/>
      </div>
      <MovieInfoList :movieInfo="movieInfo"/>
    </div>
  </div>
</template>

<script>
  import MovieInfoTitle from './MovieInfo/MovieInfoTitle';
  import MovieInfoImage from './MovieInfo/MovieInfoImage';
  import MovieInfoList from './MovieInfo/MovieInfoList';
  import MovieInfoRating from './MovieInfo/MovieInfoRating';

  export default {
    components: {
      MovieInfoRating,
      MovieInfoList,
      MovieInfoImage,
      MovieInfoTitle
    },
    props: {
      movieInfo: Object,
    },
  };
</script>

<style lang="scss">
  .movie {
    &__info {
      height: 700px;
      width: 700px;
      background: rgba(#007bff, .1);
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    &__content {
      display: flex;
      width: 600px;
      justify-content: space-around;
    }
  }
</style>
