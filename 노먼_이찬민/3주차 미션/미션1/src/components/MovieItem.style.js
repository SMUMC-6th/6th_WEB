import styled from 'styled-components';
import {Link} from 'react-router-dom';

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

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const LLink = styled(Link)`
  width: 100%;
  height: 80%;
`

const TitleVote = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap:10px;
  color: ivory;
  width: 100%;
  height: 20%;
`

const Span = styled.span`
  font-size: 15px;
  width: 70%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* margin: 50px 0 40px 0; */
  /* margin-left: 10px; */
`

const Paragraph = styled.p`
  font-size: 14px;
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

`

export { Item, Image, LLink, TitleVote, Span, Paragraph };