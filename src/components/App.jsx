// import { useState, useEffect } from 'react';
// import { getMoviesBySearch } from './Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Layout from '../Layout/Layout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
