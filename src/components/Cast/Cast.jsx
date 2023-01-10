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
          <img className="cast" src={image ?? defaultImage} alt={image} />
          <h3 className="cast">{name}</h3>
          <p className="cast">
            Character: <b className="cast">{character}</b>
          </p>
          <p className="cast">
            Popularity: <b className="cast">{popularity}</b>
          </p>
        </StyledItem>
      ))}
    </StyledList>
  );
}
