import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div>© 2024 쪼잉</div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 50px;
  background-color: #090b13;

  position: relative;

  div {
    position: absolute;

    right: 20px;
    bottom: 20px;

    color: rgb(237, 239, 245, 0.8);
    font-size: 11px;
  }
`;
