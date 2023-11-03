import { Link } from 'react-router-dom';

import styles from './styles/RenderMovieList.module.css';


const RenderMovieList = (arrayOfFilms, location) => {
  const fragment = arrayOfFilms.map(movie => {
    const { id, title } = movie
    return <li key={id} className={styles.movieItem}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={styles.movieLink}
      >
        {title}
      </Link>
    </li>
  });
  return fragment
};


export default RenderMovieList;