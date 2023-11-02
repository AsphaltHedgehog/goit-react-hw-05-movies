import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/"



export const fetchTrending = async () => {
  const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI5MjVjOWVlYmE0MmY5ODhjZjMyMWI0ODg0MDg3MSIsInN1YiI6IjY1NDM4ZDMwZWQyYWMyMDBlM2M5OWIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOlDfgA-ZrNOtnsRpjX5Vq_8FS2OkPPf-u-SrFfAW3I'
  };

  try {
    const response = await axios.get('trending/movie/day?language=en-US', { headers: headers })
    return response.data.results;
  } catch(error) {
    throw error;
  };
};


export const fetchFilmInfo = async (movieId, subInfo) => {
  const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYmI5MjVjOWVlYmE0MmY5ODhjZjMyMWI0ODg0MDg3MSIsInN1YiI6IjY1NDM4ZDMwZWQyYWMyMDBlM2M5OWIyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOlDfgA-ZrNOtnsRpjX5Vq_8FS2OkPPf-u-SrFfAW3I'
  };

  try {
    const response = await axios.get(`movie/${movieId}${subInfo}?language=en-US`, { headers: headers })
    switch (subInfo) {
      case '':
        return response.data;
      case '/credits':
          return response.data.cast;
      case '/reviews':
        return response.data.results;
      default:
        break;
    }
  } catch(error) {
    throw error;
  };
};




