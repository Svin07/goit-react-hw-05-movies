import { useState } from 'react';
// import css from './Movies.module.css';
// import Header from '../../components/Header/Header';
// import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';
// import { getMoviesBySearch } from 'API/API/api';
import Search from '../../components/Search/Search';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');

  const handlySetSearchQuery = value => {
    setSearchQuery(value);
  };
  return (
    <>
      <div>
        <Search handlySetSearchQuery={handlySetSearchQuery} />
      </div>
      <div>
        <MoviesList searchQuery={searchQuery} />
      </div>
    </>
  );
}
