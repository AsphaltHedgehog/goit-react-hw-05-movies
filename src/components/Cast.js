import { fetchFilmInfo } from "../Api/MovieApi.js";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import Loader from './Loader.js';

const Cast = () => {
  const { filmId } = useParams();
  const [filmCreditsData, setFilmCredits] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFilmInfo(
          'filmInfo',
          filmId,
          '/credits');
        setFilmCredits(response);
        setLoading(false)
      } catch (error) {
        alert(error);
        setLoading(false)
      };
    };
    fetchData();
  }, [filmId]);

  const renderCredits = () => {
    if (isLoading) {
      return <Loader />;
    };

    if (!filmCreditsData.length) {
      return <div>Sorry, server didn't respond</div>;
    };

    const CreditsList = filmCreditsData.map(credit => {
      const { profile_path, name, character, id } = credit;
      const imgPath = `https://image.tmdb.org/t/p/w500/${profile_path}`
      return (
      <li key={id}>
        <img src={imgPath} alt={name} width='150'></img>
        <div>
          <p>{name}</p>
          <p>{`Character: ${character}`}</p>
        </div>
      </li>
    );
    })
    return CreditsList;
  };
  

  return (<div>
    <ul>
      {renderCredits()}
    </ul>
  </div>
  )



};

export default Cast