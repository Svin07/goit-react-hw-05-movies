import { useState } from 'react';
import css from './Search.module.css';
import { useSearchParams } from 'react-router-dom';

export default function Search({ handlySetSearchQuery }) {
  const [query, setQuery] = useState('');

  // const query = searchParams.get('search');

  const handlyChange = ({ target: { value } }) => {
    value && setQuery(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setQuery(e.target.value);
    handlySetSearchQuery(query);
  };

  return (
    <div className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.searchform}>
        <button type="submit" className={css.searchformbutton}>
          Search
        </button>

        <input
          className={css.searchforminput}
          type="text"
          onChange={handlyChange}
          placeholder="Search movies"
          value={query}
        />
      </form>
    </div>
  );
}
