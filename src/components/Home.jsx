import React from 'react';
import '../scss/Home.scss';
import Header from './Header';

function Home() {

  return (
    <>
    <div className="home">
     <Header/>
     <div className="text">
      <h1>Welcome To TechTonic </h1>
      <h2>A vibrant community </h2>
     </div>
    </div>
    </>
  )
}

export default Home