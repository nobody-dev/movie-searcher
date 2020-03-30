import Vue from 'vue';
import Vuex from 'vuex';
import { movieSearchResource } from '../resources/resources';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    movie: {},
    similarMovies: [],
    favoriteMovies: [],
    searchText: '',
  },
  mutations: {
    setPropertyInStore(state, { key, value }) {
      Vue.set(state, key, value);
    },
    setMovieToFavorite(state, value) {
      state.favoriteMovies.unshift(value)
    },
    removeMovieFromFavorite(state, value) {
      state.favoriteMovies.find((movie, index) => {
        movie.id === value ? state.favoriteMovies.splice(index, 1) : false;
      });
    },
  },
  actions: {
    async loadPopularMovies({ commit }) {
      try {
        const response = await movieSearchResource.loadPopularMoviesRequest();
        const json = await response.json();
        commit('setPropertyInStore', { key: 'movies', value: json.results });
      }
      catch (error) {
        console.error(error);
      }
    },
    async searchMovies({ commit, dispatch }, payload) {
      payload === '' ? dispatch('loadPopularMovies') : false;
      if (payload.length > 1) {
        try {
          const response = await movieSearchResource.searchMoviesRequest(payload);
          const json = await response.json();
          commit('setPropertyInStore', { key: 'movies', value: json.results });
        }
        catch (error) {
          console.error(error);
        }
      }
    },
    async loadMovieInfo({ commit }, movieId) {
      commit('setPropertyInStore', { key: 'movie', value: null });
      try {
        const response = await movieSearchResource.loadMovieInfoRequest(movieId);
        const json = await response.json();
        commit('setPropertyInStore', { key: 'movie', value: json });
      }
      catch (error) {
        console.error(error);
      }
    },
    async loadSimilarMovies({ commit }, movieId) {
      commit('setPropertyInStore', { key: 'similarMovies', value: null });
      try {
        const response = await movieSearchResource.loadSimilarMoviesRequest(movieId);
        const json = await response.json();
        commit('setPropertyInStore', { key: 'similarMovies', value: json.results });
      }
      catch (error) {
        console.error(error);
      }
    },
  },
});
