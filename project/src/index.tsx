import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const AppSettings = {
  placeCardsCount : 5,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placeCardsCount={AppSettings.placeCardsCount}/>
  </React.StrictMode>,
);
