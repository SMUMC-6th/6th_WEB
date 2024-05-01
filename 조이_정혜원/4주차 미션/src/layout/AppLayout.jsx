import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const AppLayout = () => {
  return (
    <Conatiner>
      <Navbar />
      <Wrapper>
        <Outlet />
      </Wrapper>

      <Footer />
    </Conatiner>
  );
};

export default AppLayout;

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

const Wrapper = styled.div`
  flex: 1;
  height: 80%;
`;
