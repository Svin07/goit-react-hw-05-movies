// import { useState } from 'react';
import { getMoviesByTrending } from 'API/API/api';
import MoviesList from '../../components/MoviesList/MoviesList';

const Home = () => {
  const searchQuery = true;
  return (
    <div>
      <MoviesList
        fetchFunction={getMoviesByTrending}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default Home;
