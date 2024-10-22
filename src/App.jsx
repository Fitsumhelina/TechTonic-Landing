import React from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Counter from './components/Counter';
import Service from './components/Service';
import Teams from './components/Teams';
import Gallery from './components/Gallery';
import Partners from './components/Partners';

function App() {
  return (
    <>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="counter">
        <Counter />
      </div>
      <div id="about">
        <Service />
        <About />
        <Gallery />
        <Teams />
        <Partners />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
