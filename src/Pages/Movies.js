import { useEffect, useState } from "react";

import { useLocation, useSearchParams  } from "react-router-dom";

import { fetchFilmInfo } from '../Api/MovieApi.js';

import RenderMovieList from '../components/RenderMovieList.js';

import Loader from "components/Loader.js";

import styles from "./styles/Movies.module.css";


export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');

  const [queryResult, setResult] = useState([]);

  const [searchQuery, setQuery] = useState('');

  const [isLoading, setLoading] = useState(false);

  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      if (!searchParams.get('query')) {
        return;
      };
      setLoading(true)
      try {
        const response = await fetchFilmInfo(
          'filmSearch',
          '',
          '',
          searchParams.get('query')
        )
        setResult(response)
        setLoading(false)
      } catch (error) {
        alert(error);
        setLoading(false)
      }
    };

    fetchData();
  }, [searchParams]
  );


  const heandlerSubmit = (e) => {
    e.preventDefault();

    setSearchParams({query: searchQuery})
  };


  return (
    <div className={styles.container}>
      <form onSubmit={heandlerSubmit}>
        <input
          type="search"
          onChange={
            e => setQuery(e.target.value)
          }
        >
        </input>
        <button type='submit'>Search</button>
      </form>
      {isLoading && <Loader />}
      {queryResult.length > 0 &&
        (<ul className={styles.movieList}>
          {RenderMovieList(queryResult, location)}
        </ul>)  
      }
    </div>
  );
};