import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { GlobalContext } from '../contexts/Global.context';

const MainLayout = ({ children }) => {
  const { colors, isDark } = useContext(GlobalContext);

  return (
    <AppContainer isDark={isDark} colors={colors}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </AppContainer>
  );
};

const AppContainer = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  color: props.isDark ? props.colors.white : props.colors.black,
  backgroundColor: props.isDark ? props.colors.dark[6] : props.colors.white,
}));

const Main = styled.main(() => ({
  flex: 1,
  padding: '8px 16px',
  display: 'flex',
  flexDirection: 'row',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
}));

export default MainLayout;
