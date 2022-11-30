import styled from 'styled-components';

const Container = styled.header((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '8px 16px',
  borderTop: `1px solid ${
    props.isDark ? props.colors.dark[4] : props.colors.gray[2]
  }`,
}));

export { Container };
