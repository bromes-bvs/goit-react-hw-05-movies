import { fetchFilms } from 'components/service/tmdbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledItem, StyledList } from './Cast.styled';
import defaultImage from './default.jpg';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchFilms('credits', null, null, movieId)
      .then(setCast)
      .catch(() => {
        alert('Something wrong in cast set');
      });
  }, [movieId]);

  if (cast.length === 0) {
    return;
  }

  return (
    <StyledList>
      {cast.map(({ name, character, image, popularity }) => (
        <StyledItem key={name}>
          <img src={image ?? defaultImage} alt={image} />
          <h3>{name}</h3>
          <p>
            Character: <b>{character}</b>
          </p>
          <p>
            Popularity: <b>{popularity}</b>
          </p>
        </StyledItem>
      ))}
    </StyledList>
  );
}
