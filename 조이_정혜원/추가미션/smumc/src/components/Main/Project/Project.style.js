import styled, { keyframes, css } from "styled-components";
import theme from "../../../theme";
import { changeColor, changeColorLight } from "../Info/Info.style";
import { Link } from "react-router-dom";

const infiniteAnimation1 = keyframes`
    0% {
      transform: translateX(0%)
    }
    50% {
      transform: translateX(-100%)
    }
    50.1% {
      transform: translateX(100%)
    }
    100% {
      transform: translateX(0%)
    }
  `;

const infiniteAnimation2 = keyframes`
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
`;

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER}
  width: 100%;
  height: 55%;
  position: relative;

  h1 {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    letter-spacing: 3px;
    margin-bottom: 20px;

    animation: ${(props) =>
      props.theme === theme.darkTheme
        ? css`
            ${changeColor} 1s 0s infinite linear alternate
          `
        : css`
            ${changeColorLight} 1s 0s infinite linear alternate
          `};
  }

  h4 {
    margin-bottom: 60px;
    color: ${theme.COLOR.GRAY};
  }
`;

const SliderContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Original = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  ${(props) =>
    props.$animate &&
    css`
      animation: ${infiniteAnimation1} 250s linear infinite;
      &:hover {
        animation-play-state: paused;
      }
    `}
  ${(props) =>
    !props.$animate &&
    css`
      animation: ${infiniteAnimation1} 250s linear infinite;
    `}
  animation-play-state: ${(props) => (props.$animate ? "running" : "paused")};
`;

const Copy = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  ${(props) =>
    props.$animate &&
    css`
      animation: ${infiniteAnimation2} 250s linear infinite;
      &:hover {
        animation-play-state: paused;
      }
    `}
  ${(props) =>
    !props.$animate &&
    css`
      animation: ${infiniteAnimation2} 250s linear infinite;
    `}
  animation-play-state: ${(props) => (props.$animate ? "running" : "paused")};
`;

const ProjectBox = styled.div`
  position: relative;
  margin: 10px;
  width: 330px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }

  p {
    position: absolute;
    right: 10px;
    bottom: 10px;
    font-family: ${theme.FONT.PRETENDARD_MEDIUM};
    font-size: 14px;
    background-color: ${theme.COLOR.GRAY};
    color: #fff;
    padding: 3px 12px;
    border-radius: 10px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(0.98);
  }
`;

const GoWrapper = styled(Link)`
  text-decoration: none;
  position: absolute;
  bottom: 0;
  right: 35px;
  font-size: 14px;
  color: ${theme.COLOR.GRAY};
  padding: 5px 10px;
  border-radius: 15px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
  }
`;

export { Container, SliderContainer, SliderWrapper, Original, Copy, ProjectBox, GoWrapper };
