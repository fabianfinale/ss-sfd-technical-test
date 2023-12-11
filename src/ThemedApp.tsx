import { useContext } from 'react';
import { ThemeContext } from './theme/ThemeContext';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { dark, light } from './theme/themes';
import GlobalStyles from './styles/global.styles';

const ThemedApp = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

export default ThemedApp;
