import { useState } from 'react'
import './scss/App.scss'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Counter from './components/Counter'
import Coreteamlist from './components/Coreteamlist'
import Partners from './components/Partners'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
     <Counter/>
     <About/>
     <Coreteamlist/>
     <Partners/>
     <Contactus/>
     <Footer/>
    </>
  )
}

export default App
