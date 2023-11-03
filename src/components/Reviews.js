import { fetchFilmInfo } from "../Api/MovieApi.js";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import Loader from './Loader.js'


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
      return <p>Sorry, no reviews available...</p>;
    };

    const ReviewsList = filmReviewsData.map(review => {
      const { author, content, id } = review;
      return (
        <li key={id}>
          <p>{`Author: ${author}`}</p>
          <p>{content}</p>
        </li>
      );
    })
    return <ul>{ReviewsList}</ul>
  };
  
  return (
    <div>
      {renderReviews()}
    </div>
  );
};

export default Reviews;