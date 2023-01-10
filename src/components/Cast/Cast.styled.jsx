import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: calc(100% - 20px);
  margin-top: 45px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledItem = styled.li`
  width: calc((100% - 50px) / 6);
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  h3 {
    text-align: center;
    font-size: 16px;
  }
  p {
    font-size: 12px;
    display: block;
    box-sizing: content-box;
    text-align: center;
  }
  b {
    margin: 3px auto;
    text-align: center;
    box-sizing: content-box;
    white-space: pre-line;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
