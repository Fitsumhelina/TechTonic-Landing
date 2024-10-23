import React from 'react';
import '../scss/Home.scss';
import { FlipWords } from "./ui/flip-words";
import video from './../../public/assets/video2.mp4';

function Home() {
  const words = [" Tribe ", " Community ", " Tech Leader ", " Modern ", " 100% free ", " Enthusiast "];
  return (
    <>
      <div className="home">
      <video autoPlay  muted playsInline className="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="text">
          <h1>Welcome To TechTonic </h1>
          <h2>
            We Are <span className="flip-words"><FlipWords words={words} /></span>
          </h2>
        </div>
      </div>
    </>
  )
}

export default Home