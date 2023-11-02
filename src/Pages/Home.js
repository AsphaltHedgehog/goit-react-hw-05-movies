import { fetchTrending } from '../Api/MovieApi.js'

import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrending();
        setTrending(response)
      } catch (error) {
        alert(error);
      }
    };
    fetchData()
  }, []);

  const RenderTrending = () => {
    const fragment = trending.map(movie => {
      const { id, title } = movie
      return <li key={id}>
        <Link to={`/movies/${id}`} state={{from: '/'}}>{title}</Link>
      </li>
    });
    return fragment
  };

  return (<div>
    <h1>Trending today</h1>
    <ul>
    {RenderTrending()}
    </ul>
  </div>)
}