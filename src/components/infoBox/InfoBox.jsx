import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../contexts/Global.context';

const InfoBox = ({ imageName, title = 'ND', cases = 'ND', total = 'ND' }) => {
  const boxRef = useRef(null);
  const { colors, isDark } = useContext(GlobalContext);
  const themeProps = { colors, isDark };
  const [toggled, setToggled] = useState(false);

  const numberFormatter = useCallback(
    (num) => {
      const lookup = [
        { value: 1, symbol: '' },
        { value: 1e3, symbol: 'K' },
        { value: 1e6, symbol: 'M' },
        { value: 1e9, symbol: 'B' },
      ];
      const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
      var item = lookup
        .slice()
        .reverse()
        .find((item) => num >= item.value);
      return item
        ? (num / item.value).toFixed(2).replace(rx, '$1') + item.symbol
        : '0';
    },
    [total]
  );

  useEffect(() => {
    const box = boxRef.current;
    const toggle = () => setToggled(!toggled);
    box.addEventListener('click', toggle);
    return () => box.removeEventListener('click', toggle);
  }, [toggled]);

  return (
    <Box ref={boxRef} toggled={toggled} {...themeProps}>
      <Front {...themeProps}>
        <Title>
          {title}
          <Img
            src={`./images/${isDark ? 'dark' : 'light'}-${imageName}`}
            alt="gif"
          />
        </Title>
        <Cases title={title} {...themeProps}>
          + {cases}
        </Cases>
        <Total {...themeProps}>
          {total === 'ND' ? total : numberFormatter(total)} Total
        </Total>
      </Front>

      <Back {...themeProps}>
        <Title>{title}</Title>
        <Cases title={title} {...themeProps}>
          + {cases}
        </Cases>
      </Back>
    </Box>
  );
};

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
  //   padding: 16,
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

export default InfoBox;
