import styled from "styled-components";

const Navbar = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #5852FE;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;

  p {
    margin-right: 160px;
    margin-top: 5px;
    color: white;
    font-size: 15px;
    
    border: 1px solid white;
    border-radius: 5px;
    padding: 2px;
  }
`;

const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

export {Navbar, Title}