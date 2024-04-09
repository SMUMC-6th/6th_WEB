import { styled } from "styled-components";
import { FaCheck } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f5f5f5;
  border-radius: 10px;

  width: 270px;
  height: 30px;
  margin: 10px;
  padding: 10px;

  p {
    margin-left: 3px;
    font-size: 13px;

    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const UpdateWrapper = styled.form`
  display: flex;
  align-items: center;

  input {
    margin-left: 3px;
    margin-right: 4px;
    border: none;
    border-bottom: 1px solid rgb(156, 154, 154, 0.5);
    background-color: transparent;

    outline: none;
  }
`;

const Icon = styled(FaCheck)`
  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
`;

const ButtonBox = styled.div`
  button {
    width: 37px;
    height: 20px;
    margin: 0 2px;

    border: 1px solid gray;
    border-radius: 5px;
    background-color: #fff;

    &:hover {
      cursor: pointer;
      background-color: #d4cfcf;

      transform: scale(0.93);
    }
  }
`;

export { Container, UpdateWrapper, Icon, ButtonBox };
