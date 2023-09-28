// import { useState, useEffect } from 'react';
// import { getMoviesBySearch } from './Movies';
import Layout from '../Layout/Layout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [page, setPage] = useState(1);
  // const [totalHits, setTotalHits] = useState(0);
  // const [error, setError] = useState('');
  // useEffect(() => {
  //   if (!searchQuery) return;
  //   const fetchMovies = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await getMoviesBySearch(searchQuery, page);
  //       const { hits, totalHits } = data;
  //       setImages(prevImages => [...prevImages, ...hits]);
  //       setTotalHits(totalHits);
  //     } catch (error) {
  //       setError(error.response.data);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchMovies();
  // }, [searchQuery, page]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
