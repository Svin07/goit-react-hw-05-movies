import css from './MoviesItem.module.css';

export default function MoviesItem({ image, title, rating, backdrop, id }) {
  const basicUrlForImage = 'https://image.tmdb.org/t/p/w500';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <li className={css.movieGalleryItem}>
      <div className={css.imgWraper}>
        <img
          src={image ? `${basicUrlForImage}${image}` : defaultImg}
          alt={title}
          className={css.movieGalleryItemImage}
        />
      </div>
      <h2>{title}</h2>
      <h3>Рейтинг ☆ {rating}</h3>
    </li>
  );
}
// https://image.tmdb.org/t/p/w500/T5xXoFqyc9jNXZIbH4Sw0jwWjw.jpg
