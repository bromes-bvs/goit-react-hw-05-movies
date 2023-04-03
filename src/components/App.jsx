import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';
import Home from 'pages/Home';
import Layout from './Layout/Layout';

const MovieDetail = lazy(() => import('../pages/MovieDetail'));
const Movies = lazy(() => import('../pages/Movies'));

export function App() {
  return (
    <>
      <Layout />
      <Suspense fallback={<div>Wait a minute...</div>}>
        <Routes>
          <Route element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}
