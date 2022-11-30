import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/Global.context';
import ActionIcon from '../actionIcon/ActionIcon';
import { Container, Title } from './Header.styles';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';

const Header = () => {
  const { colors, isDark, toggleTheme } = useContext(GlobalContext);

  return (
    <Container colors={colors} isDark={isDark}>
      <Title>Covid Tracker</Title>
      <ActionIcon
        icon={isDark ? <IoMdSunny /> : <IoMdMoon />}
        onClick={toggleTheme}
      />
    </Container>
  );
};

export default Header;
