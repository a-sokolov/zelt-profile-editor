import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from './Provider';
import { Routes } from './Routes';

import './styles.css';

export const App: FC = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <Routes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
