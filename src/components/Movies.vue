<template>
  <ul class="movies">
    <li
      v-for="movie in getMovies"
      class="movies__item"
      :style="{ backgroundImage: `url('https://image.tmdb.org/t/p/w342/${movie.poster_path}')` }"
      @click="toMovie(movie)"
    >
      <span class="movies__name">{{movie.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    getMovies() {
      return this.$store.getters.getMovies;
    },
  },
  methods: {
    toMovie(movie) {
      this.$router.push(`/movie/${movie.id}`);
    },
  },
  mounted() {
    this.$store.dispatch('loadPopularMovies');
  },
};
</script>

<style lang="scss" scoped >

  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &__item {
      position: relative;
      width: 342px;
      height: 517px;
      margin: 20px 15px 20px 15px;
      cursor: pointer;
      transition: all 1s ease;
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
  }
</style>
