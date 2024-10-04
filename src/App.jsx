import { useState } from 'react'
import './scss/App.scss'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
import Counter from './components/Counter'
import Coreteamlist from './components/Coreteamlist'
import { Service, Services } from './components/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
     <Counter/>
     <About/>
     <Services/> 
     <Coreteamlist/>
     <Contactus/>
     <Footer/>
    </>
  )
}

export default App
