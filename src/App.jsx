import { useState } from 'react'
import './scss/App.scss'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contactus from './components/Contactus'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Header/> */}
     <Home/>
     <About/>
     <Contactus/>
     <Footer/>
    </>
  )
}

export default App
