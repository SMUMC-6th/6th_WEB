import styled from "styled-components";

const FormContainer = styled.form`
  width: 100%;
  height: calc(100vh - 20px - 50px);
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-top: -200px;

  h1 {
    font-weight: bold;
    margin-bottom: 50px;
  }
  `;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 600px;
  height: 30px;
  padding: 10px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);

  input {
    width: 520px;
    height: 80%;
    margin:0 10px;
    border: 1px solid black;
    border-radius: 5px;
    text-align: left;
    padding-left: 10px;
  }

  button {
    background-color: white;
    border: none;
    cursor: pointer;
  }
`;

const ContentBox = styled.div`
  margin: 20px auto;
  padding: 10px;

  width: 600px;
  height: 30px;

  div {
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    margin-bottom: 15px; /* 각 todo item 하단의 여백 추가 */
    display: flex;
    align-items: center; /* 버튼과 입력 필드를 세로 중앙 정렬 */
    gap: 10px; /* 요소 사이의 간격 추가 */
}
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: space-between; /* 내부 요소들을 양 끝으로 정렬하고, 사이에 공간을 만듦 */
  margin-bottom: 10px;

  input, p {
    margin: auto 20px;
  }

  input {
    text-align: left;
    border-radius: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin:10px;
  box-shadow: none !important;

  button {
    background-color: white;
    border: 0.5px dashed;
    border-radius: 7px;
  }
`;

  export {FormContainer, InputBox, ContentBox, Content, ButtonContainer}