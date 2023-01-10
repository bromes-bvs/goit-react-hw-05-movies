import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FiltredItem({ id, image, title }) {
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <li>
        <img src={image} alt={id} />
        <h2>{title}</h2>
      </li>
    </Link>
  );
}

FiltredItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
