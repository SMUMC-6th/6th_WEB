import styled from "styled-components";

export const AppContainer = styled.div`
  h1 {
    text-align: center;
  }

  button {
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  background-color: #9999FF;
  height: 100px;
  width: 100%;
  align-items: center;
`;

export const LogoBox = styled.div`
  flex: 1;

  h1 {
    font-weight: bold;
    font-size: 45px;
    color: white;
    margin-right: 500px;
  }
`;

export const NavbarItem = styled.div`
  width: 50px;
  height: 50px;
  margin: 40px 20px;
  color: white;
  align-self: center;
  padding-left: 10px;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px auto;
  padding: 40px;
  max-width: 70%;
  border-radius: 10px;
`;

export const CountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 45px;
  margin-left: auto;

  h3 {
    margin-left: 12px;
  }
`;

export const ItemsContainer = styled.div`
  font-size: 27px;
  margin: 30px;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin: 50px;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export const TotalContainer = styled.div`
  max-width: 70%;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TotalLabel = styled.div`
  font-size: 35px;
`;

export const TotalAmount = styled.div`
  font-size: 35px;
`;

export const Hr = styled.hr`
  margin-top: 30px;
  height: 2px;
  width: 100%;
  background-color: black;
  margin: 0 auto;
`;

export const Button = styled.button`
  width: 300px;
  height: 50px;
  margin: 30px auto;
  font-size: 25px;
  border-radius: 10px;
  color: red;
`;

export const Button1 = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
`;

export const MessageContainer = styled.div`
  text-align: center;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const ModalButton = styled.button`
  margin: 25px;
  padding: 10px 20px;
  cursor: pointer;
`;