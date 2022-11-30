import styled from 'styled-components';

const Container = styled.header((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 16,
  padding: '8px 16px',
  borderBottom: `1px solid ${
    props.isDark ? props.colors.dark[4] : props.colors.gray[2]
  }`,
}));

const Title = styled.h1(() => ({
  fontSize: 20,
  letterSpacing: 6,
  userSelect: 'none',
  fontFamily: 'Permanent Marker, Roboto, sans-serif',
  '@media only screen and (max-width: 768px)': {
    fontSize: 16,
    letterSpacing: 2,
  },
}));

export { Container, Title };
