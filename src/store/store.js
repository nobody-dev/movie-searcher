import Vue from 'vue';
import Vuex from 'vuex';
import { movieSearchResource } from '../resources/resources';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: {},
    movie: {},
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },
    getMovie(state) {
      return state.movie;
    },
  },
  mutations: {
    setPropertyInStore(state, { key, value }) {
      Vue.set(state, key, value);
    },
  },
  actions: {
    async loadPopularMovies({ commit }) {
      const response = await movieSearchResource.loadPopularMoviesRequest();
      const json = await response.json();
      commit('setPropertyInStore', { key: 'movies', value: json.results });
    },
    async searchMovies({ commit, dispatch }, payload) {
      payload === '' ? dispatch('loadPopularMovies') : false;
      if (payload.length > 1) {
        const response = await movieSearchResource.searchMoviesRequest(payload);
        const json = await response.json();
        commit('setPropertyInStore', { key: 'movies', value: json.results });
      }
    },
    async loadMovieInfo({ commit }, payload) {
      const response = await movieSearchResource.loadMovieInfoRequest(payload);
      const json = await response.json();
      console.log(json);
      commit('setPropertyInStore', { key: 'movie', value: json });
    }
  },
});
