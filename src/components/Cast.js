import { fetchFilmInfo } from "../Api/MovieApi.js";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import Loader from './Loader.js';

import styles from './styles/Cast.module.css';

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
      return <div
        className={styles.errorMessage}
      >
        Sorry, server didn't respond
      </div>;
    };

    const CreditsList = filmCreditsData.map(credit => {
      const { profile_path, name, character, id } = credit;
      const imgPath = `https://image.tmdb.org/t/p/w500/${profile_path}`
      return (
      <li key={id} className={styles.castMember}>
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
  

  return (
    <div className={styles.castContainer}>
      <ul className={styles.castList}>
        {renderCredits()}
      </ul>
    </div>
  )



};

export default Cast