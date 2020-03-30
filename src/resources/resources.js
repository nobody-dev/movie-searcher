class MovieSearchResource {
  apiKey = '35c3017effe841fa8ce6057344097a4a';
  language = 'ru';
  apiUrl = 'https://api.themoviedb.org/3/';

  loadPopularMoviesRequest() {
    const options = {
      page: 1,
    };
    return fetch(`${this.apiUrl}movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${options.page}`);
  }

  searchMoviesRequest(payload) {
    const options = {
      page: 1,
    };
    return fetch(`${this.apiUrl}search/movie?api_key=${this.apiKey}&language=${this.language}&page=${options.page}&query=${payload}`)
  }

  loadMovieInfoRequest(movieId) {
    return fetch(`${this.apiUrl}movie/${movieId}?api_key=${this.apiKey}&language=${this.language}`);
  }

  loadSimilarMoviesRequest(movieId) {
    const options = {
      page: 1,
    };
    return fetch(`${this.apiUrl}movie/${movieId}/similar?api_key=${this.apiKey}&language=${this.language}&page=${options.page}`)
  }
}

export const movieSearchResource = new MovieSearchResource();
