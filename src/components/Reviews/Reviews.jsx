import { getDetailsMoviesReviews } from 'API/API/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader/Loader';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [moviesObj, setMoviesObj] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailsMoviesReviews(id);
        setMoviesObj(data);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [id]);

  if (!moviesObj) return;

  const { results } = moviesObj;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      <ul>
        {results.length < 1 ? (
          <h3>No reviews found</h3>
        ) : (
          results.map(({ author, content }) => (
            <li key={author}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
