// компонент MovieDetails, сторінка пошуку детальної інформації про фільм
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import Loader from '../../components/Loader/Loader';

import {
  getDetailsMoviesById,
  //   getDetailsMoviesCast,
  //   getDetailsMoviesReviews,
} from 'API/API/api';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [moviesObj, setMoviesObj] = useState({});

  const { id } = useParams();
  const basicUrlForImage = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const { title, genres, overview, poster_path, release_date, vote_average } =
    moviesObj;

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailsMoviesById(id);
        setMoviesObj(data);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [id]);

  const genresName = genres.map(genre => genre.name).join(' ');

  console.log(genresName);
  console.log(moviesObj);

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      <button type="button" className="">
        Go back
      </button>
      <section className={css.movieCard}>
        <img
          className={css.movieImg}
          src={poster_path ? `${basicUrlForImage}${poster_path}` : defaultImg}
          alt={title}
        />
        <div className={css.movieDescr}>
          <h1 className={css.title}>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User score: {(vote_average * 10).toFixed(0)}%</p>
          <h3 className={css.movieOverview}>Overview</h3>
          <p>{overview}</p>
          <h4 className={css.movieGenres}>Genres</h4>
          <p>{genresName}</p>
        </div>
      </section>
      <section className={css.additionalInformation}>
        <h5>Additional Information</h5>
        <ul>
          <li>
            <a href="/README.md">Cast</a>
          </li>
          <li>
            <a href="/README.md">Reviews</a>
          </li>
        </ul>
      </section>
    </>
  );
}
