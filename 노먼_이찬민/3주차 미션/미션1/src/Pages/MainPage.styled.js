import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const TopWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(10, 10, 10);
  color: white;
  font-weight: bold;
  font-size: 20px;
`

const BottomWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(50, 50, 100);
`

const SearchLabel = styled.div`
  font-size: 30px;
  font-weight: bolder;
  color: aliceblue;
  margin-bottom: 20px;
`

const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 15px;
`

export { Container, TopWrapper, BottomWrapper, SearchLabel, SearchInput }

