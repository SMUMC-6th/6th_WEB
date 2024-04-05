import styled from 'styled-components';


const Item = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(70, 59, 130);
  /* border: 1px solid rgb(211, 197, 255); */
  width: 200px;
  height: 300px;
  /* align-items: center; */
  justify-content: center;
  /* row-gap: 10px; */
`

const Image = styled.div`
  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 80%;
`

const TitleVote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap:10px;
  color: ivory;
  width: 100%;
  height: 20%;
`

const Span = styled.span`
  font-size: 14px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 50px 0 40px 0; */
  /* margin-left: 10px; */
`

const Paragrape = styled.p`
  width: 20%;
  margin: auto;
`

export { Item, Image, TitleVote, Span, Paragrape };