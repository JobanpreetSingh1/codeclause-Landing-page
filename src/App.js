import React from 'react';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Testnomial from './components/Testnomial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (

  
        <div className='App'>
        <Home/>
      <About />
      <Work />
      <Testnomial />
      <Contact />
      <Footer />
    
    </div>
  );
}

export default App;
