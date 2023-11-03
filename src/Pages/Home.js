import { fetchFilmInfo } from '../Api/MovieApi.js'

import { useEffect, useState } from 'react';

import RenderMovieList from '../components/RenderMovieList.js'

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFilmInfo('trendingFilms');
        setTrending(response)
      } catch (error) {
        alert(error);
      }
    };
    fetchData()
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {RenderMovieList(trending, '/')}
      </ul>
    </main>
  );
};