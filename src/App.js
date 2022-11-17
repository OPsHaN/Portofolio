import './App.css';
import Header from './Header/header';
import About from './About/about';
import Skills from './Skills/skills';
import React, { Component }  from 'react';
import Portfolio from './Portfolio/portfolio';
import Footer from './Footer/footer';

function App() {
  return (
    // <div className="App">
<div class="container-fluid">
<Header/>
<About/>
<Skills/>
<Portfolio/>
<Footer/>
    </div>
  );
}

export default App;
