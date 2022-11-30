import React, { useState, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { colors as ColorsPalette } from '../utils/Colors.style';
import { GlobalStyle } from '../utils/Global.style';

const GlobalContext = createContext({
  colors: {},
  isDark: true,
  toggleTheme: () => {},
});

const GlobalProvider = ({ children }) => {
  const [colors] = useState(ColorsPalette);
  const [isDark, setIsDark] = useLocalStorage('isDark', true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <GlobalContext.Provider
      value={{
        colors,
        isDark,
        toggleTheme,
      }}
    >
      <GlobalStyle />
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
