import './App.css';
import React from 'react';
// just provides cross browser style normalization/consistency (diff browsers/older browsers)
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className='App'>
      <CssBaseline/>
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
