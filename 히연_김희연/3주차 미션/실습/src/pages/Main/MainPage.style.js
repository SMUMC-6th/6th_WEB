import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 22px;
`;

const Bottom = styled.div`
  width: 100%;
  height: 60%;
  display: grid;
  place-items: center;
  background-color: #323264;
`;

const Content = styled.div`
  display: grid;
  place-items: center;
  margin-top: -200px;
`;

const Search = styled.div`
  font-size: 30px;
  font-weight: bolder;
  color: white;
  margin: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 20px;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export {
  Container,
  Top,
  Bottom,
  Content,
  Search,
  Input,
  InputContainer,
  Loading,
};
