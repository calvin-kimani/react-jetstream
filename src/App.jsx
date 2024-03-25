import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Web from './_routes/Web';

function App() {
  return (
      <BrowserRouter>
        <Web />
      </BrowserRouter>
  );
}

export default App;