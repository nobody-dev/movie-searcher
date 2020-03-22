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

  loadMovieInfoRequest(payload) {
    return fetch(`${this.apiUrl}movie/${payload}?api_key=${this.apiKey}&language=${this.language}`);
  }
}

export const movieSearchResource = new MovieSearchResource();
