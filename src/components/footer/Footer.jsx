import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/Global.context';
import { Container } from './Footer.styles';
import ActionIcon from '../actionIcon/ActionIcon';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const Footer = () => {
  const { colors, isDark } = useContext(GlobalContext);
  return (
    <Container colors={colors} isDark={isDark}>
      <ActionIcon
        size={24}
        icon={<IoLogoLinkedin />}
        onClick={() =>
          window.open('https://www.linkedin.com/in/ismail-aissami/', '_blank')
        }
      />
      <ActionIcon
        size={24}
        icon={<IoLogoGithub />}
        onClick={() =>
          window.open('https://github.com/IsmailAISSAMI', '_blank')
        }
      />
    </Container>
  );
};

export default Footer;
