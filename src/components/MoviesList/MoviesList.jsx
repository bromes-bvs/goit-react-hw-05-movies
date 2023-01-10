import MoviesItem from 'components/MoviesItem/MoviesItem';
import { fetchFilms } from 'components/service/tmdbAPI';
import { useEffect, useState } from 'react';
import { StyledList } from './MoviesList.styled';

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchFilms('trending')
      .then(setMovies)
      .catch(() => alert('Something wrong'));
  }, []);

  return (
    movies.length > 0 && (
      <StyledList>
        {movies.map(({ id, image, name, rating }) => (
          <MoviesItem
            key={id}
            id={id}
            image={image}
            title={name}
            rating={rating}
          />
        ))}
      </StyledList>
    )
  );
}
