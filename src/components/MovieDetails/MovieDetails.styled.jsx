import styled from 'styled-components';

import icon from './back.png';
console.log(icon);

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  max-width: calc(100vw - 70px);
  margin-top: 45px;
  margin-bottom: 30px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  img {
    display: block;
    max-width: 30%;
    height: auto;
    border-radius: 8px;
  }

  div {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
  }
  p {
    display: flex;
    align-items: flex-start;
    gap: 15px;
  }

  b {
    color: #052a47;
    display: block;
    white-space: nowrap;
    margin-right: 15px;

    /* flex-shrink: 0; 
    box-sizing: content-box; */
  }

  div.information {
    flex-direction: row;
    justify-content: center;
    margin: 0;
    margin-top: 30px;
  }
`;

export const GoBackButton = styled.button`
  display: inline-block;
  position: fixed;
  top: 15px;
  left: 20px;
  width: 60px;
  height: 60px;
  border: 0;
  background-size: 95%;
  background-color: #fff;

  background-image: url('/goit-react-hw-05-movies/static/media/back.2ce001c0aefdf1117b7c.png');
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  z-index: 1111;
  border-radius: 50%;

  :hover {
    opacity: 1;
  }
`;
