import styled from 'styled-components';
import Icons from '../Icons/Icons';

const CountMessage = styled.div`
  // cardContainer아니고 부모div에서의 비율
  width: 100%;
  height: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const CardContainer = styled.div`
  width: 35%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap : 20px;
  background-color: rgb(255, 157, 190);
  border-radius: 10px;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-size: 44px;
  font-weight: bolder;
  color: white;
`;

const ImageContainer = styled.div`
  // card container에서의 비율
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;


export { CountMessage, CardContainer, CardHeader, CardImage, ImageContainer };
