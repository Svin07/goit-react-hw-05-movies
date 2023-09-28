import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <NavLink to="/">
        <h2>*GREAT LOGO*</h2>
      </NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="movies">Movies</NavLink>
    </header>
  );
}
