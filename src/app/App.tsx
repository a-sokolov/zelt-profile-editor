import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from './Provider';
import { Routes } from './Routes';

import './styles.css';

export const App: FC = () => (
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <Provider>
          <Routes />
        </Provider>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
