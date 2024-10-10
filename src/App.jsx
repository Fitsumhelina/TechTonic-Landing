import { useState } from 'react'
import './scss/App.scss'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Counter from './components/Counter'
// import Partners from './components/Partners'
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
     <Contactus/>
     <Footer/>
    </>
  )
}

export default App
