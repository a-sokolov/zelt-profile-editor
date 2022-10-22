import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const App = () => (
  <React.StrictMode>
    <BrowserRouter>
      <h1>Bingo!</h1>
    </BrowserRouter>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
