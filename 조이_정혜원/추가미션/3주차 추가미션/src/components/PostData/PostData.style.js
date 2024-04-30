import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
`;

const Wrapper = styled.div`
  font-size: 11px;
  height: 440px;

  overflow-y: auto;
`;

const PostBox = styled.div`
  display: flex;

  width: 430px;
  height: 37px;
  padding: 5px;
  margin: 6px;

  border-radius: 5px;
  background-color: aliceblue;

  overflow-y: auto;

  p {
    font-weight: bold;
    margin-right: 15px;
  }

  div > div {
    font-weight: bold;
  }

  span {
    font-size: 9px;
    color: gray;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 9px;
  width: 34px;
  height: 20px;
  margin: 4px;

  border: none;
  border-radius: 3px;

  background-color: ${(props) => (props.disabled ? "#e0e0e0" : "")};
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;

const NmuberButton = styled(Button)`
  width: 20px;
  color: ${(props) => (props.disabled ? "black" : "")};
  background-color: ${(props) => (props.disabled ? "aliceblue" : "")};
`;

export { Container, Wrapper, PostBox, ButtonWrapper, Button, NmuberButton };
