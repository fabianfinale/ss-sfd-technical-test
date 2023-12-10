import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import StylesReset from './styles/resets.styles.ts';
import GlobalStyles from './styles/global.styles.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StylesReset />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
