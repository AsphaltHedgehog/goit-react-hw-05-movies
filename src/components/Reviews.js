import { fetchFilmInfo } from "../Api/MovieApi.js";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import Loader from './Loader.js'

import styles from './styles/Reviews.module.css';

const Reviews = () => {
  const { filmId } = useParams();
  const [filmReviewsData, setFilmReviews] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFilmInfo(
          'filmInfo',
          filmId,
          '/reviews');
        setFilmReviews(response)
        setLoading(false)
      } catch (error) {
        alert(error);
        setLoading(false)
      };
    };
    fetchData();
  }, [filmId]);

  const renderReviews = () => {
    if (isLoading) {
      return <Loader />;
    };

    if (!filmReviewsData.length) {
      return <p className={styles.noReviews}>Sorry, no reviews available...</p>;
    };

    const ReviewsList = filmReviewsData.map(review => {
      const { author, content, id } = review;
      return (
        <li key={id} className={styles.reviewItem}>
          <p className={styles.author}>{`Author: ${author}`}</p>
          <p className={styles.content}>{content}</p>
        </li>
      );
    })
    return <ul className={styles.reviewList}>{ReviewsList}</ul>
  };
  
  return (
    <div className={styles.reviewsContainer}>
      {renderReviews()}
    </div>
  );
};

export default Reviews;