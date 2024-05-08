import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #181935;

  justify-content: flex-end;
  align-items: center;

  p {
    margin-right: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>https://www.makeus.in/umc</p>
    </FooterContainer>
  )
}

export default Footer;