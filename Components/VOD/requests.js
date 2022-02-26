const API_KEY = "7f4c81c6792fcaa82b60958802b0bd71";

const requests = {
  fletchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fletchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fletchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fletchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fletchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fletchHorrornMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fletchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fletchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
