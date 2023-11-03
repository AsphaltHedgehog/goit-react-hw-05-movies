import { NavLink, Route, Routes } from "react-router-dom";

import { Home } from '../Pages/Home'
import { Movies } from '../Pages/Movies'
import { MovieDetails } from '../Pages/MovieDetails'
import { NotFound } from '../Pages/NotFound'

import Cast from './Cast';
import Reviews from "./Reviews";

import styles from './styles/App.module.css'

export const App = () => {
  return (
    <div>
      <header className={styles.nav}>
        <nav id="nav">
          <ul>
            <li>
              <NavLink exact='true'
                style={({ isActive }) => ({
                  color: isActive ? '#f76f00' : '#fff',
                })}
                to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink style={
                ({ isActive }) => ({
                  color: isActive ? '#f76f00' : '#fff',
                })
              } to='/movies'>Movies</NavLink >
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.mainContainer}>
        <Routes>
          <Route path="/" element={<Home />} exact='true' />
          <Route path="/movies" element={<Movies />} exact='true' />
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
