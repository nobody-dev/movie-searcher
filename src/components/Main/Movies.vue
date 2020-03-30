<template>
  <div>
    <!--loading-->
    <div class="movies__loading" v-if="isLoading">
      <v-progress-linear
        color="rgb(0, 123, 255)"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
    </div>
    <!--content-->
    <ul class="movies" v-if="!isLoading">
      <li
        v-for="movie in getMovies"
        class="movies__item"
        :style="{ backgroundImage: movie.poster_path ?
          `url('https://image.tmdb.org/t/p/w342${movie.poster_path}')` :
          `url('https://thumbs.dfs.ivi.ru/storage15/contents/6/a/a700332f290b273bc1437ae389696c.jpg')` }"
        @click="toMovie(movie)"
      >
        <span class="movies__name">{{movie.title}}</span>
        <MovieInfoFavoriteBtn :movieInfo="movie" class="movies__button"/>
      </li>
    </ul>
  </div>
</template>

<script>
import MovieInfoFavoriteBtn from '../Movie/MovieInfo/MovieInfoFavoriteBtn';

export default {
  components: { MovieInfoFavoriteBtn },
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    getMovies() {
      return this.$store.state.movies;
    },
    getSearchText() {
      return this.$store.state.searchText;
    }
  },
  methods: {
    toMovie(movie) {
      this.$router.push(`/movie/${movie.id}`);
    },
  },
  async mounted() {
    //If there is no searchText, the start page just loads, otherwise nothing happens because the user's search result is loading
    !this.getSearchText ? await this.$store.dispatch('loadPopularMovies') : false;
    this.isLoading = false;
  },
};
</script>

<style lang="scss" scoped >

  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &__loading {
      padding-top: 50px;
      width: 70vw;
      height: 50px;
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
        .movies__name {
          display: flex;
          transform: translateY(50%);
          bottom: 50%;
          transition: all 0.2s ease-out;
          opacity: 1;
          pointer-events: all;
        }
        .movies__button {
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
