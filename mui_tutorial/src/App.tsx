import React, { FC } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material';
import customTheme from './assets/theme'
const App:FC=()=> {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <NavBar/>
        <ImageCard/>
      </div>
    </ThemeProvider>
  );
}

export default App;

