import React, { useContext } from 'react';
import { Container } from './ActionIcon.styles';
import { GlobalContext } from '../../contexts/Global.context';

const ActionIcon = ({ size, icon, onClick }) => {
  const { colors, isDark } = useContext(GlobalContext);
  return (
    <Container size={size} colors={colors} isDark={isDark} onClick={onClick}>
      {icon}
    </Container>
  );
};

export default ActionIcon;
