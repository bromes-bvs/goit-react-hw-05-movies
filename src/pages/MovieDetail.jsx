import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchFilms } from 'components/service/tmdbAPI';
import {
  GoBackButton,
  Wrapper,
} from 'components/MovieDetails/MovieDetails.styled';
import { StyledDetailLink } from 'components/AppBar/AppBar.styled';

export default function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    fetchFilms('details', null, null, movieId)
      .then(setMovie)
      .catch(() => {
        alert('Something wrong movie broken');
      });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { name, genres, slogan, image, overview, release } = movie;

  return (
    <main>
      {location.state?.from && (
        <Link to={location.state.from}>
          <GoBackButton />
        </Link>
      )}
      <Wrapper>
        <img src={image} alt={name} />
        <div>
          <h2>
            {name}({release})
          </h2>
          <p>
            <b>Описание : </b>
            {overview}
          </p>
          <p>
            <b> Слоган : </b>
            {slogan}
          </p>
          <p>
            <b> Жанры : </b>
            {genres}
          </p>
          <div className="information">
            <StyledDetailLink to="reviews">Reviews</StyledDetailLink>
            <StyledDetailLink to="cast">Cast</StyledDetailLink>
          </div>
          <Outlet />
        </div>
      </Wrapper>
    </main>
  );
}

// console.log(Date.parse('2022-12-22'));
// console.log(new Date('1999-12-22').getFullYear());
