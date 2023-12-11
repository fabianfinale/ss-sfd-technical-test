import React from 'react';
import ReactDOM from 'react-dom/client';

import StylesReset from './styles/resets.styles.ts';
import { Themes } from './theme/ThemeContext.tsx';
import ThemedApp from './ThemedApp.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StylesReset />
    <Themes>
      <ThemedApp />
    </Themes>
  </React.StrictMode>
);
