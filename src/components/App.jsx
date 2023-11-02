import { NavLink, Route, Routes } from "react-router-dom";

import { Home } from '../Pages/Home'
import { Movies } from '../Pages/Movies'
import { MovieDetails } from '../Pages/MovieDetails'
import { NotFound } from '../Pages/NotFound'

import Cast from './Cast';
import Reviews from "./Reviews";

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/movies'>Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:filmId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};
