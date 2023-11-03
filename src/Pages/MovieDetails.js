import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { fetchFilmInfo } from '../Api/MovieApi.js';

import logo from '../img/image-placeholder.jpg'

import styles from './styles/MovieDetails.module.css';

export const MovieDetails = () => {
  const { filmId } = useParams();
  const [filmData, setFilmData] = useState([]);
  const location = useLocation();

  const [onImgError, setImgError] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFilmInfo('filmInfo', filmId, '');
        setFilmData(response)
      } catch (error) {
        alert(error);
      };
    };
    fetchData();
  }, [filmId]);





  const renderFilmInfo = () => {
    if (filmData.length === 0) {
      return <div>Loading...</div>;
    };
    
    const {
      title,
      release_date,
      overview,
      vote_average,
      poster_path,
      genres } = filmData;

    const year = release_date.split('-');
    const genresList = genres.map(item => item.name).join(', ');
    let imgPath = `https://image.tmdb.org/t/p/w500/${poster_path}`

    return (
      <section className={styles.filmSection}>
        <img
          src={!onImgError ? imgPath : logo }
          alt={title}
          className={styles.poster}
          width='350'
          onError={() => setImgError(true)}
        ></img>
        <div className={styles.infoSection}>
          <h1 className={styles.title}>{`${title} (${year[0]})`}</h1>
          <p>{`User Score: ${Math.round(vote_average * 10)}%`}</p>
          <h2>Overview</h2>
          <p>
            {overview}
          </p>
          <h2>Genres</h2>
          <p className={styles.genres}>
            {genresList}
          </p>
        </div>
      </section>
    );
  };
  
  return (
    <div>
      {
        location.state &&
        <Link to={location.state.from}>Go Back</Link>
      }

      {renderFilmInfo()}

      <section>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to='cast'>Cast</Link>
          </li>
          <li>
            <Link to='reviews'>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </section>
    </div>
  );
};