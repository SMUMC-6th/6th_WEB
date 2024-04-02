import styled from 'styled-components';
import Icons from '../Icons/Icons';

const ImageURL = 'https://images.unsplash.com/photo-1708771754562-163e2994c815?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHhqUFI0aGxrQkdBfHxlbnwwfHx8fHw%3D';

const CountMessage = styled.div`
  // cardContainer아니고 부모div에서의 비율
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

const CardContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 36px;
  font-weight: bolder;
  color: white;
`;

const CardImage = styled.div`
  // card container에서의 비율
  width: 100%;
  height: 65%; 
  display: block;
  background-image: url(${ImageURL});
  background-size: cover;
  background-repeat: no-repeat;
`;


export { CountMessage, CardContainer, CardHeader, CardImage };
