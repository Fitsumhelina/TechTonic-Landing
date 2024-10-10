import { useState } from 'react'
import './scss/App.scss'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Counter from './components/Counter'
import Service from './components/Service'
import Teams from './components/Teams'

function App() {

  return (
    <>
     <Header/>
     <Home/>
     <Counter/>
     <Service/>
     <About/>
     <Teams/>
     <Footer/>
    </>
  )
}

export default App
