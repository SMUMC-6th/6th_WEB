import styled from "styled-components";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 70px;
  list-style: none;

  input[type="checkbox"] {
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid gray;
    cursor: pointer;

    &:checked {
      background-color: #87ceeb;
      border-color: #87ceeb;
    }
  }

  div {
    flex: 1;
    text-align: left;
    
  }

  button {
    border: none;
    background-color: white;
    cursor: pointer;
  }
  
`;

export {Container}