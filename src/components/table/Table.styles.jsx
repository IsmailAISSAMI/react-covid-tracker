import styled from 'styled-components';

const Container = styled.div((props) => ({
  maxHeight: '100%',
  overflow: 'auto',
  borderRadius: 4,
  border: `1px solid`,
  borderColor: props.isDark ? props.colors.dark[5] : props.colors.gray[2],
  '::-webkit-scrollbar': { width: 4 },
  '::-webkit-scrollbar-thumb': {
    borderRadius: 6,
    background: props.colors.red[7],
  },
  '::-webkit-scrollbar-thumb:hover': {
    cursor: 'pointer',
    background: props.colors.red[8],
  },
}));

const Filters = styled.div(() => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const CountriesTable = styled.table(() => ({ width: '100%' }));

const Row = styled.tr((props) => ({
  height: 36,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  backgroundColor:
    props.index % 2 === 0
      ? props.isDark
        ? props.colors.dark[6]
        : props.colors.white
      : props.isDark
      ? props.colors.dark[4]
      : props.colors.gray[1],
  '&:hover': {
    backgroundColor: props.isDark ? props.colors.red[6] : props.colors.red[3],
  },
}));

const Text = styled.td(() => ({
  flex: 2,
  paddingLeft: 16,
  textOverflow: 'ellipsis',
}));

const Stats = styled.td(() => ({
  flex: 1,
  fontWeight: 700,
}));

export { Container, Filters, CountriesTable, Row, Text, Stats };
