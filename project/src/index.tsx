import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {BrowserRouter} from 'react-router-dom';
import {loadOffersAction} from './store/api-actions';
import ErrorMessage from "./components/error-message/error-message";

store.dispatch(loadOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <ErrorMessage />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
