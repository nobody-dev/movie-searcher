<template>
  <div class="favorite">
    <h1 class="favorite__title">Избранные фильмы:</h1>
    <!--empty-->
    <div class="favorite__empty" v-if="!getFavoriteMovies.length">
      <span class="favorite__empty-text">Вы ничего не добавили</span>
      <img class ="favorite__empty-img" src="../static/sadsmile.png" alt="Empty :(">
    </div>
    <!--favorite-movies-->
    <ul class="favorite__movies" v-if="getFavoriteMovies.length">
      <li
        v-for="movie in getFavoriteMovies"
        class="favorite__item"
        :style="{ backgroundImage: movie.poster_path ?
          `url('https://image.tmdb.org/t/p/w342${movie.poster_path}')` :
          `url('https://thumbs.dfs.ivi.ru/storage15/contents/6/a/a700332f290b273bc1437ae389696c.jpg')` }"
        @click="toMovie(movie)"
      >
        <span class="favorite__name">{{movie.title}}</span>
        <MovieInfoFavoriteBtn :movieInfo="movie" class="favorite__button"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import MovieInfoFavoriteBtn from '../components/Movie/MovieInfo/MovieInfoFavoriteBtn';

  export default {
    components: {
      MovieInfoFavoriteBtn,
    },
    computed: {
      getFavoriteMovies() {
        return this.$store.state.favoriteMovies;
      },
    },
    methods: {
      toMovie(movie) {
        this.$router.push(`/movie/${movie.id}`);
      },
    },
  };
</script>

<style scoped lang="scss">
  .favorite {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    &__title {
      padding: 20px;
      font-size: 25px;
    }
    &__empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      &-img {
        height: 300px;
        width: 300px;
        margin-top: 40px;
      }
      &-text {
        font-size: 22px;
      }
    }
    &__movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    &__item {
      position: relative;
      width: 342px;
      height: 517px;
      margin: 20px 15px 20px 15px;
      cursor: pointer;
      background-size: cover;
      list-style: none;
      &:hover {
        &::before {
          background: rgba(0, 0, 0, 0.8);
          width: 100%;
          height: 100%;
          content: '';
          position: absolute;
        }
        .favorite__name {
          display: flex;
          transform: translateY(50%);
          bottom: 50%;
          transition: all 0.2s ease-out;
          opacity: 1;
          pointer-events: all;
        }
        .favorite__button {
          transform: translate(-50%, 50%);
          bottom: 10%;
          transition: all 0.2s ease-out;
          opacity: 1;
          pointer-events: all;
        }
      }
    }
    &__name {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 342px;
      padding-top: 3px;
      font-size: 28px;
      font-family: 'Rubik', sans-serif;
      font-weight: 500;
      text-align: center;
      transition: all 0.3s ease-out;
      opacity: 0;
      pointer-events: none;
      bottom: 0;
      color: azure;
      &:hover {
        background: #2962FF;
      }
    }
    &__button {
      position: absolute;
      transition: all 0.3s ease-out;
      opacity: 0;
      pointer-events: none;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
    }
  }
</style>
