<template>
    <div class="movie__similar-container">
      <h2 class="movie__similar-title">Похожие фильмы:</h2>
      <!--loading-->
      <div class="movie__similar-loading" v-if="!getSimilarMovies">
        <v-progress-linear
          color="rgb(0, 123, 255)"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </div>
      <!--content-->
      <ul class="movie__similar" v-else-if="getSimilarMovies && getSimilarMovies.length">
        <li
          v-for="movie in getSimilarMovies"
          class="movie__similar-item"
          :style="{ backgroundImage: movie.poster_path ?
          `url('https://image.tmdb.org/t/p/w342${movie.poster_path}` :
          `url('https://thumbs.dfs.ivi.ru/storage15/contents/6/a/a700332f290b273bc1437ae389696c.jpg')` }"
          @click="toMovie(movie)"
        >
          <span class="movie__similar-name">{{movie.title}}</span>
        </li>
      </ul>
      <span v-else>Похожих не найдено</span>
    </div>
</template>

<script>
  export default {
    computed: {
      getSimilarMovies() {
        return this.$store.state.similarMovies;
      }
    },
    methods: {
      toMovie(movie) {
        this.$router.push(`/movie/${movie.id}`);
      },
    },
  };
</script>

<style scoped lang="scss">
  .movie__similar {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &-container {
      padding-top: 20px;
      min-height: 150px;
      text-align: center;
    }
    &-loading {
      padding-top: 50px;
      width: 800px;
      height: 50px;
    }
    &-title {
      font-size: 25px;
    }
    &-item {
      position: relative;
      width: 150px;
      height: 230px;
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
          left: 0;
        }
        .movie__similar-name {
          display: flex;
          transform: translateY(50%);
          bottom: 50%;
          transition: all 0.2s ease-out;
          opacity: 1;
          pointer-events: all;
        }
      }
    }
    &-name {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding-top: 3px;
      font-size: 16px;
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
  }
</style>
