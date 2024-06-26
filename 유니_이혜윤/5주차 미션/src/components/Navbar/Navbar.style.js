import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  top: 0; left: 0;
  background-color: #181935;
  z-index: 1000;
`;

const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled.h1`
  margin: 0 30px;
  color: white;
`;

const HeaderRight = styled.ul`
  display: flex;
  margin: 30px 5px;
  
  list-style: none;
  color: white;

  & > li {
    margin-right: 10px;
    padding: 10px;
  }

  li:hover {
    font-weight: bold;
  }
`;

export {HeaderContainer, HeaderWrap, HeaderLeft, HeaderRight }