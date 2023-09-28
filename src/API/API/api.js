import axios from 'axios';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const API_KEY = '6d0bdb48df496425228df907b70af28f';

export const getMoviesBySearch = async (query, page) => {
  const { data } = await axios(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
};

// curl --request GET \
//      --url https://api.themoviedb.org/3/search/movie?query=star wars&api_key=6d0bdb48df496425228df907b70af28f
