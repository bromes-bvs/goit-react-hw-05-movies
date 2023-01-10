import axios from 'axios';

const API_KEY = '64fd10dd21120a0c7883823eb7471513';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const ednpoints = {
  trending: '/trending',
  search: '/search/movie',
  details: '/movie',
  credits: '/credits',
  reviews: '/reviews',
};

export const fetchFilms = async (type, page = 1, query, id) => {
  try {
    switch (type) {
      case 'trending':
        // https://api.themoviedb.org/3/movie/550?api_key=64fd10dd21120a0c7883823eb7471513

        const resAll = await axios.get(
          `${ednpoints[type]}/movie/day?api_key=${API_KEY}`
        );

        const homeMovies = resAll.data.results.map(
          ({ id, title, poster_path, vote_average }) => ({
            id: id,
            image: `https://image.tmdb.org/t/p/original/${poster_path}`,
            name: title,
            rating: vote_average.toFixed(1),
          })
        );

        return homeMovies;
      case 'search':
        //  https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=batman&page=1

        const resQuery = await axios.get(
          `${ednpoints[type]}?api_key=${API_KEY}&query=${query}&page=${page}`
        );
        const searchMovies = resQuery.data.results.map(
          ({ id, title, poster_path }) => ({
            id: id,
            image: `https://image.tmdb.org/t/p/original/${poster_path}`,
            name: title,
          })
        );

        return searchMovies;
      case 'details':
        // https://api.themoviedb.org/3/movie/id?api_key=<<api_key>>

        const resDetail = await axios.get(
          `${ednpoints[type]}/${id}?api_key=${API_KEY}`
        );
        const { title, genres, tagline, poster_path, overview, release_date } =
          resDetail.data;

        const searchDetail = {
          release: new Date(release_date).getFullYear(),
          overview: overview,
          image: `https://image.tmdb.org/t/p/original/${poster_path}`,
          name: title,
          genres: genres.map(({ name }) => name).join(', '),
          slogan: tagline,
        };
        return searchDetail;
      case 'credits':
        // https://api.themoviedb.org/3/movie/123/credits?api_key=<<api_key>>

        const resCredits = await axios.get(
          `/movie/${id}${ednpoints[type]}?api_key=${API_KEY}`
        );

        const fetchCast = resCredits.data.cast.map(
          ({ name, character, profile_path, popularity }) => ({
            name: name,
            image: profile_path
              ? `https://image.tmdb.org/t/p/original/${profile_path}`
              : null,
            character: character,
            popularity: popularity.toFixed(1),
          })
        );

        return fetchCast;
      case 'reviews':
        // https://api.themoviedb.org/3/movie/123/reviews?api_key=<<api_key>>&page=1

        const resReviews = await axios.get(
          `/movie/${id}${ednpoints[type]}?api_key=${API_KEY}&page=${page}`
        );
        const fetchReviews = resReviews.data.results.map(
          ({ author, content }) => ({
            author: author,
            content: content,
          })
        );

        return fetchReviews;

      default:
        return;
    }
  } catch (error) {
    console.log(error);
    alert('Something wrong');
  }
};
