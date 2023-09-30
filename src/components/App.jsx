import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout/Layout';

const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={'Loading...'}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/:id"
          element={
            <Suspense fallback={'Loading...'}>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense fallback={'Loading...'}>
              <Movies />
            </Suspense>
          }
        />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route
            path="cast"
            element={
              <Suspense fallback={'Loading...'}>
                <Cast />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense fallback={'Loading...'}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};
