import { useContext } from 'react';
import { FixedSwitchWrapper, Toggle, ToggleIcon } from './themeSwitch.styles';
import { ThemeContext } from '../../theme/ThemeContext';
import Sun from '../../assets/sun.svg';
import Moon from '../../assets/moon.svg';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const onToggle = () => {
    toggleTheme();
  };

  return (
    <FixedSwitchWrapper>
      <Toggle onClick={onToggle} theme={theme}>
        <ToggleIcon src={theme === 'dark' ? Sun : Moon} alt='SVG icon' />
      </Toggle>
    </FixedSwitchWrapper>
  );
};

export default ThemeSwitch;
