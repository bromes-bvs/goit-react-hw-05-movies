import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesItem({ id, image, title, rating }) {
  const location = useLocation();
  return (
    <Link to={`movies/${id}`} state={{ from: location }}>
      <li>
        <img src={image} alt={id} />
        <h2>{title}</h2>
        <p>
          Рейтинг : <span>{rating}</span>
        </p>
      </li>
    </Link>
  );
}

MoviesItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
};
