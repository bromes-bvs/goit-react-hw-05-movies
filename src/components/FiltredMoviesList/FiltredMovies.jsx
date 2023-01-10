import PropTypes from 'prop-types';
import FiltredItem from 'components/FiltredItem/FiltredItem';
import { StyledList } from './FiltredMovies.styled';

export default function FiltredMovies({ movies }) {
  return (
    <StyledList>
      {movies.map(({ id, image, name }) => (
        <FiltredItem key={id} id={id} image={image} title={name} />
      ))}
    </StyledList>
  );
}

FiltredMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
