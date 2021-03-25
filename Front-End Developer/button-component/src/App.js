import React from 'react';

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Buttons from './components/Buttons/Buttons';

const app = () => {
  return (
    <div className="App">
      <Sidebar />
      <Buttons />
    </div>
  );
}

export default app;

// font-family: 'Noto Sans JP', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Ubuntu Mono', monospace;