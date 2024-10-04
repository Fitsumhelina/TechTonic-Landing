// import React from 'react';
// import '../scss/Home.scss';
// import Header from './Header';


"use client";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

import Header from "./Header";
function Home() {
  const images = [
    "https://media.licdn.com/dms/image/v2/D4E22AQGQR5U9MekakQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1703749819916?e=1730937600&v=beta&t=XX9Eg7M0aSYHxOGuRI24whY-UVYEGjDmhktBH5JHUUw",
    "https://media.licdn.com/dms/image/v2/D4E22AQFcaaWl2qchsA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1709655117385?e=1730937600&v=beta&t=AR_JjhKJaZ8P-fzYyR3zmF2yQKse4vcWzo-3q0w1GlI",
    "https://media.licdn.com/dms/image/v2/D4E22AQEWXz-DPdQpTA/feedshare-shrink_1280/feedshare-shrink_1280/0/1709655113033?e=1730937600&v=beta&t=miJAE2GIukKfARS5ja4Ll-JANP20iGw77f2tI4ayvnE",
  ];

  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Gradients X Animations
        </p>
      </div>
    </BackgroundGradientAnimation>
  )
}

export default Home