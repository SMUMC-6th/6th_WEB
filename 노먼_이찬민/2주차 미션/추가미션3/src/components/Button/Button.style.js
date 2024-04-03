import styled from 'styled-components';

const ButtonContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Button = styled.button`
  width: 10%;
  height: 25%;
  background-color: {(props)=>(props.color)};
  color : black;
  font-size: 15px;
  border-radius: 8px;
`;

export { ButtonContainer , Button };