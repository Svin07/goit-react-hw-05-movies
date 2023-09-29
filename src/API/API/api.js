import axios from 'axios';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const API_KEY = '6d0bdb48df496425228df907b70af28f';

// Запит для отримання колекції за пошуком

export const getMoviesBySearch = async (query, page) => {
  const { data } = await axios(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
};

// Запит для отримання колекції популярних

export const getMoviesByTrending = async () => {
  const { data } = await axios(`/trending/movie/day?api_key=${API_KEY}`);
  return data;
};
