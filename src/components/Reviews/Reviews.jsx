import { fetchFilms } from 'components/service/tmdbAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledReviews } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchFilms('reviews', 1, null, movieId)
      .then(setReviews)
      .catch(() => {
        alert('Something wrong reviews is absent');
      });
  }, [movieId]);

  return reviews.length === 0 ? (
    <b style={{ marginTop: '30px', textAlign: 'center', fontSize: '20px' }}>
      We don't have any reviews for this movie
    </b>
  ) : (
    <StyledReviews>
      {reviews.map(({ content, author }) => (
        <li key={content}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </StyledReviews>
  );
}
