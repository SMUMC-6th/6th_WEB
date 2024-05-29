import styled, { css } from "styled-components";

const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  desktop: "992px",
  largeDesktop: "1200px",
};

const respondTo = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  place-items: center;
  background-color: #062863;
  padding: 20px;

  ${respondTo.tablet`
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  background-color: #062863;

  h3 {
    margin: 10px;
    font-size: 20px;
    color: white;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  margin: 10px;
  border-radius: 20px;
`;