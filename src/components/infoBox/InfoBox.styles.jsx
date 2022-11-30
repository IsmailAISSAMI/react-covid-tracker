import styled from 'styled-components';

// CONTAINERS
const Box = styled.div((props) => ({
  margin: '8px 0',
  width: '30%',
  height: '150px',
  '@media only screen and (max-width: 768px)': {
    width: '100%',
    height: '150px',
  },
  borderRadius: 4,
  border: `1px solid`,
  borderColor: props.isDark ? props.colors.dark[5] : props.colors.gray[2],
  backgroundColor: props.isDark ? props.colors.dark[4] : props.colors.gray[1],
  transition: '3s ease-out',
  transformStyle: 'preserve-3d',
  transform: props.toggled ? 'rotateY(180deg)' : 'rotateY(0deg)',
}));

const Front = styled.div(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  backfaceVisibility: 'hidden',
}));

const Back = styled.div(() => ({
  width: '100%',
  height: '100%',
  transform: 'rotateY(180deg)',
  backfaceVisibility: 'hidden',
}));

// CONTENTS
const Title = styled.h1(() => ({
  margin: 16,
  fontSize: 20,
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Img = styled.img(() => ({
  width: 50,
  height: 50,
}));

const Cases = styled.h2((props) => ({
  margin: 16,
  fontSize: 18,
  fontWeight: 700,
  color:
    props.title === 'Cases'
      ? props.isDark
        ? props.colors.blue[4]
        : props.colors.blue[7]
      : props.title === 'Recovered'
      ? props.isDark
        ? props.colors.green[4]
        : props.colors.green[8]
      : props.isDark
      ? props.colors.red[4]
      : props.colors.red[7],
}));

const Total = styled.div((props) => ({
  margin: 16,
  fontSize: 14,
  fontWeight: 600,
  color: props.isDark ? props.colors.gray[5] : props.colors.gray[6],
}));

export { Box, Front, Back, Title, Img, Cases, Total };
