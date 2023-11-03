import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/"


export const fetchFilmInfo = async (
  requestType,
  movieId,
  subInfo,
  query) => {
  const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI5MjVjOWVlYmE0MmY5ODhjZjMyMWI0ODg0MDg3MSIsInN1YiI6IjY1NDM4ZDMwZWQyYWMyMDBlM2M5OWIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOlDfgA-ZrNOtnsRpjX5Vq_8FS2OkPPf-u-SrFfAW3I'
  };

  if (requestType === 'trendingFilms') {
    // request trending films list
      try {
    const response = await axios.get('trending/movie/day?language=en-US', { headers: headers })
    return response.data.results;
  } catch(error) {
    throw error;
    };
  } else if (requestType === 'filmSearch') {
    // request search film by query
    try {
      const response = await axios.get(
        `search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        { headers: headers })
    return response.data.results;
  } catch(error) {
    throw error;
    };
  } else if (requestType === 'filmInfo') {
    // request film info or cast and reviews
    try {
      const response = await axios.get(`movie/${movieId}${subInfo}?language=en-US`, { headers: headers });
    switch (subInfo) {
      case '':
        return response.data;
      case '/credits':
          return response.data.cast;
      case '/reviews':
        return response.data.results;
      default:
        break;
      };
  } catch(error) {
    throw error;
    };
  };
};




