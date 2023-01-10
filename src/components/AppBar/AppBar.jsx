import { RiAncientGateLine } from 'react-icons/ri';
import { StyledLink, StyledNavigation } from './AppBar.styled';
// import Icon from 'components/AppBar/house.png';

export default function AppBar() {
  return (
    <StyledNavigation>
      <nav>
        <StyledLink to="/">
          <RiAncientGateLine />
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </StyledNavigation>
  );
}
