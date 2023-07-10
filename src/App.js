import React from 'react';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
function App() {
  return (

  
        <div className='App'>
        <Home/>
      <About />
      <Work/>
    </div>
  );
}

export default App;
