import './App.css';
import React from 'react';
// just provides cross browser style normalization/consistency (diff browsers/older browsers)
import CssBaseline from '@material-ui/core/CssBaseline';
import NavigationBar from './Components/NavBar';
import Container from '@material-ui/core/Container';
import GridLayout from './Components/GridLayout';


// will update soon.
function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <NavigationBar />
      <Container>
      <main>
        <GridLayout />
        </main>
      </Container>
      <h1>Welcome</h1>
    </div>
  );
}

export default App;
