import axios from 'axios';

const AUTH_TOKEN = '88a9b9553cef5a4da6c5262b0ee8a891';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: AUTH_TOKEN,
};

const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/week');
  return response.data;
};

const getMovieByID = async id => {
  const response = await axios.get(`/movie/${id}`);

  return response.data;
};

const getMovieCreditsByID = async id => {
  const response = await axios.get(`/movie/${id}/credits`);

  return response.data.cast;
};

const getMovieReviewsByID = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
};

const getMovieByQuerySearch = async query => {
  const response = await axios.get('/search/movie', {
    params: {
      query: query,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export {
  getTrendingMovies,
  getMovieByID,
  getMovieCreditsByID,
  getMovieReviewsByID,
  getMovieByQuerySearch,
};
