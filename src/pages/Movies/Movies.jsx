import { useEffect, useRef, useState } from 'react';
// import css from './Movies.module.css';
// import Header from '../../components/Header/Header';
// import Loader from '../../components/Loader/Loader';
import MoviesList from '../../components/MoviesList/MoviesList';
import { getMoviesBySearch } from 'API/API/api';
import Search from '../../components/Search/Search';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');

  const [searchParams] = useSearchParams();

  const query = searchParams.get('search');

  const ref = useRef(query);

  useEffect(() => {
    ref.current && setSearchQuery(ref.current);
  }, []);

  const handlySetSearchQuery = value => {
    setSearchQuery(value);
  };
  return (
    <>
      <div>
        <Search handlySetSearchQuery={handlySetSearchQuery} />
      </div>
      <div>
        <MoviesList
          searchQuery={searchQuery}
          fetchFunction={getMoviesBySearch}
        />
      </div>
    </>
  );
}
