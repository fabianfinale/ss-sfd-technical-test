import { createGlobalStyle } from 'styled-components';
import { Palette } from './palette.styles';
import {
  ALIGN_ITEMS,
  FLEX_DIRECTION,
  JUSTIFY_CONTENT,
  flex,
} from './common.styles';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');

*,
*::after,
*::before {
  box-sizing: border-box;
}

/* Typography */

html {
  /* 62.5% of 16px = 10px */
  font-size: 62.5%;
}

body {
  font-family: 'Manrope', sans-serif;
  font-size: 2.4rem;
  line-height: 1.5;
  color: ${Palette.OFF_WHITE};
  background-color: ${Palette.DARK_GRAY};
  height: 100vh;
}

#root {
    ${flex(
      FLEX_DIRECTION.column,
      JUSTIFY_CONTENT.spaceBetween,
      ALIGN_ITEMS.center
    )}
}

h1,
h2,
h3 {
  color: ${Palette.DEEP_PURPLE};
  margin-bottom: 1rem;
}

h1 {
  font-size: 4.778rem;
}

h2 {
  font-size: 3.981rem;
}

h3 {
  font-size: 3.318rem;
}

p {
  margin-top: 0;
  font-size: 1.6rem;
}

small {
    font-size: 1.333rem;
}
`;

export default GlobalStyles;
