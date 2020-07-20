import React from 'react';
import Characters from './components/Characters';
import Background from './components/Background';
import Episodes from './components/Episodes';
import Navbar from './components/Navbar';
//import {BrowserRouter, Route, Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Background />
      <Characters />
      <Episodes />
    </div>
  );
}

export default App;
