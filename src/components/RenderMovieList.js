import { Link } from 'react-router-dom';


const RenderMovieList = (arrayOfFilms, location) => {
  const fragment = arrayOfFilms.map(movie => {
    const { id, title } = movie
    return <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
    </li>
  });
  return fragment
};


export default RenderMovieList;