import React from 'react';
import styled from 'styled-components';

const Aside = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.aside(() => ({
  width: '20%',
  height: 'calc(100vh - 117px)',
  marginLeft: 16,
  '@media (max-width: 768px)': {
    width: '100%',
    margin: '16px 0',
  },
}));

export default Aside;
