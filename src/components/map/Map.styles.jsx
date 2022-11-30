import styled from 'styled-components';

const Container = styled.div(() => ({
  flex: 1,
  '.leaflet-container': { height: 'calc(100vh - 309px)' },
}));

const Cases = styled.div((props) => ({
  color: props.isDark ? props.colors.blue[6] : props.colors.blue[8],
  span: { paddingLeft: 6, fontWeight: '700' },
}));

const Recovered = styled.div((props) => ({
  color: props.isDark ? props.colors.green[7] : props.colors.green[9],
  span: { paddingLeft: 6, fontWeight: '700' },
}));

const Deaths = styled.div((props) => ({
  color: props.isDark ? props.colors.red[6] : props.colors.red[8],
  span: { paddingLeft: 6, fontWeight: '700' },
}));

export { Container, Cases, Recovered, Deaths };
