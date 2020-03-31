<template>
  <div class="movie__info">
    <h2 class="movie__title">{{movieInfo.title}}</h2>
    <div class="movie__content">
      <div class="movie__left">
        <MovieInfoImage :moviePoster="movieInfo.poster_path"/>
        <span class="movie__rating">Рейтинг: <strong>{{movieInfo.vote_average}}</strong></span>
        <MovieInfoFavoriteBtn :movieInfo="movieInfo"/>
      </div>
      <MovieInfoList :movieInfo="movieInfo"/>
    </div>
    <MovieInfoSimilar/>
  </div>
</template>

<script>
  import MovieInfoImage from './MovieInfo/MovieInfoImage';
  import MovieInfoList from './MovieInfo/MovieInfoList';
  import MovieInfoFavoriteBtn from './MovieInfo/MovieInfoFavoriteBtn';
  import MovieInfoSimilar from './MovieInfo/MovieInfoSimilar';

  export default {
    components: {
      MovieInfoSimilar,
      MovieInfoFavoriteBtn,
      MovieInfoList,
      MovieInfoImage,
    },
    props: {
      movieInfo: Object,
    },
  };
</script>

<style lang="scss">
  .movie {
    &__title {
      font-size: 25px;
      letter-spacing: 0;
      padding: 20px;
    }
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
    &__rating {
      font-size: 16px;
      position: relative;
      top: 2px;
    }
  }
</style>
