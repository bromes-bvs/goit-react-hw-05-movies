import { StyledForm } from './SearchBox.styled';
import PropTypes from 'prop-types'

export default function SearchBox({ onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </StyledForm>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
