import React, { useContext } from 'react';
import { MdSearch } from 'react-icons/md';
import { GlobalContext } from '../../contexts/Global.context';
import { Container, Input } from './Input.styles';

const InputComponent = ({ value, setValue, placeHolder }) => {
  const { colors, isDark } = useContext(GlobalContext);
  const themeProps = { colors, isDark };

  return (
    <Container {...themeProps}>
      <MdSearch />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
        {...themeProps}
      />
    </Container>
  );
};

export default InputComponent;
