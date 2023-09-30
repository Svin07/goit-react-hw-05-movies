// компонент MoviesList, сторінка пошуку кінофільмів за ключовим словом

import { useState, useEffect } from 'react';
import css from './MoviesList.module.css';
import Loader from '../../components/Loader/Loader';
import MoviesItem from '../../components/MoviesItem/MoviesItem';

export default function MoviesList({ searchQuery, fetchFunction }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFunction(searchQuery);
        const { results } = data;

        setMovies(results);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
    setMovies([]);
  }, [searchQuery, fetchFunction]);

  return (
    <>
      <div>{isLoading && <Loader />}</div>
      {error && <h2>{error}</h2>}
      <div>
        <ul className={css.movieslist}>
          {movies.map(movie => (
            <MoviesItem
              key={movie.id}
              id={movie.id}
              image={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
