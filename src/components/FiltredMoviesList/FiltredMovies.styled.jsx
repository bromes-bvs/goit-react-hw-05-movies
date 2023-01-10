import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: calc(100vw - 70px);
  margin-top: 45px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  a {
    width: calc((100% - 140px) / 8);
    display: flex;
    text-decoration: none;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 8px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  }
  h2 {
    text-align: center;
    font-size: 16px;
    color: #051153a0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;
