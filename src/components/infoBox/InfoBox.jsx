import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import { GlobalContext } from '../../contexts/Global.context';
import { Box, Front, Back, Title, Img, Cases, Total } from './InfoBox.styles';
import { numberFormatter2 } from '../../utils/Functions';

const InfoBox = ({ imageName, title = 'ND', cases = 'ND', total = 'ND' }) => {
  const boxRef = useRef(null);
  const { colors, isDark } = useContext(GlobalContext);
  const themeProps = { colors, isDark };
  const [toggled, setToggled] = useState(false);

  const formatter = useCallback((n) => numberFormatter2(n), [total]);

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
          {total === 'ND' ? total : formatter(total)} Total
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

export default InfoBox;
