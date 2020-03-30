<template>
  <div class="movie__info">
    <MovieInfoTitle :movieTitle="movieInfo.title"/>
    <div class="movie__content">
      <div class="movie__left">
        <MovieInfoImage :moviePoster="movieInfo.poster_path"/>
        <MovieInfoRating :movieRating="movieInfo.vote_average"/>
        <MovieInfoFavoriteBtn :movieInfo="movieInfo"/>
      </div>
      <MovieInfoList :movieInfo="movieInfo"/>
    </div>
    <MovieInfoSimilar/>
  </div>
</template>

<script>
  import MovieInfoTitle from './MovieInfo/MovieInfoTitle';
  import MovieInfoImage from './MovieInfo/MovieInfoImage';
  import MovieInfoList from './MovieInfo/MovieInfoList';
  import MovieInfoRating from './MovieInfo/MovieInfoRating';
  import MovieInfoFavoriteBtn from './MovieInfo/MovieInfoFavoriteBtn';
  import MovieInfoSimilar from './MovieInfo/MovieInfoSimilar';

  export default {
    components: {
      MovieInfoSimilar,
      MovieInfoFavoriteBtn,
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
      width: 900px;
      background: rgba(#007bff, .1);
      display: flex;
      align-items: center;
      flex-direction: column;
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
    }
    &__content {
      display: flex;
      width: 800px;
      justify-content: space-around;
    }
    &__left {
      padding: 0 10px;
      text-align: center;
    }
  }
</style>
