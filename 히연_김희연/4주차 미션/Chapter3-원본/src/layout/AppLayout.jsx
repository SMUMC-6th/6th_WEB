import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import * as S from './AppLayout.style';
import Footer from '../components/Footer/Footer';

const AppLayout = () => {
  return (
    <S.Container>
      <Navbar />
      <S.OutletWrapper>
        <Outlet />
      </S.OutletWrapper>
      <Footer />
    </S.Container>
  );
};

export default AppLayout;
