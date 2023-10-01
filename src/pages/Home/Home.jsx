import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { getMoviesByTrending } from 'API/API/api';
import MoviesList from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const searchQuery = true;

  useEffect(() => {
    if (!searchQuery) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesByTrending(searchQuery);
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
  }, [searchQuery]);
  return (
    <>
      <div>{isLoading && <Loader />}</div>
      {error && <h2>{error}</h2>}
      <div>
        <MoviesList movies={movies} />
      </div>
    </>
  );
};

export default Home;
