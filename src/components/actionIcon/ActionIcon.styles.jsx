import styled from 'styled-components';

const Container = styled.div((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  margin: '0 6px',
  width: (props.size + 4) | 24,
  height: (props.size + 4) | 24,
  borderRadius: 4,
  backgroundColor: 'inherit',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: props.isDark ? props.colors.dark[4] : props.colors.gray[2],
  },
  svg: {
    width: props.size | 16,
    height: props.size | 16,
    fill: props.isDark ? props.colors.white : props.colors.black,
  },
}));

export { Container };
