import React from 'react';
import '../scss/Home.scss';
import { FlipWords } from "./ui/flip-words";
 
function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <>
    <div className="home">
      <div className="text">
      <h1>Welcome To TechTonic </h1>
      
      <h2>WE are<FlipWords words={words} /> </h2>
      </div>
    </div>
    </>
  )
}

export default Home