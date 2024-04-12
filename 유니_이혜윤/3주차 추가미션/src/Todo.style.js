import styled from "styled-components";

const FormContainer = styled.form`
  width: 100%;
  height: calc(100vh - 20px - 50px);
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

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
  margin: 10px auto;
  padding: 10px;

  width: 600px;
  height: 500px;

  div {
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
    gap: 10px; /* 요소 사이의 간격 추가 */
}
`;

const Content = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  margin: 20px;

  input, p {
    margin: 0 10px;
  }

  input {
    text-align: left;
    border-radius: 8px;
  }

  p {
    text-align: left;
    margin: 10px 0 0 10px;
  }
`;

const ModifyBox = styled.div`
  display: flex;
  margin-top: 8px;
  box-shadow: none !important;

  input {
    width: 480px;
  }

  button {
    background-color: white;
    border: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  box-shadow: none !important;
  margin: 0 10px 0 0;

  button {
    background-color: white;
    border: 0.7px dashed;
    border-radius: 7px;
  }
  button:hover {
    // transform: scale(0.95);
  }
`;

  export {FormContainer, InputBox, ContentBox, Content, ModifyBox, ButtonContainer}