import StyledTitle from './Title.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
