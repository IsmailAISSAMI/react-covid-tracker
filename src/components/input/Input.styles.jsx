import styled from 'styled-components';

const Container = styled.div((props) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  margin: '8px 0',
  marginLeft: 4,
  padding: '4px 6px',
  svg: {
    width: 20,
    height: 20,
    marginRight: 8,
    color: props.isDark ? props.colors.white : props.colors.gray[7],
  },
  '&:focus-within': {
    border: '1px solid',
    borderRadius: 4,
    borderColor: props.isDark ? props.colors.dark[0] : props.colors.gray[5],
  },
}));

const Input = styled.input((props) => ({
  flex: 1,
  border: 'none',
  color: props.isDark ? props.colors.white : props.colors.gray[8],
  backgroundColor: 'transparent',
  '&:focus': {
    outline: 'none',
  },
  '&::placeholder': {
    color: props.isDark ? props.colors.white : props.colors.gray[7],
  },
}));

export { Container, Input };
