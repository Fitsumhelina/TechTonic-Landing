// import React from 'react';
// import '../scss/Home.scss';
// import Header from './Header';


"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
function Home() {
  const images = [
    "https://media.licdn.com/dms/image/v2/D4E22AQGQR5U9MekakQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1703749819916?e=1730937600&v=beta&t=XX9Eg7M0aSYHxOGuRI24whY-UVYEGjDmhktBH5JHUUw",
    "https://media.licdn.com/dms/image/v2/D4E22AQFcaaWl2qchsA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1709655117385?e=1730937600&v=beta&t=AR_JjhKJaZ8P-fzYyR3zmF2yQKse4vcWzo-3q0w1GlI",
    "https://media.licdn.com/dms/image/v2/D4E22AQEWXz-DPdQpTA/feedshare-shrink_1280/feedshare-shrink_1280/0/1709655113033?e=1730937600&v=beta&t=miJAE2GIukKfARS5ja4Ll-JANP20iGw77f2tI4ayvnE",
  ];

  return (
    <>
      <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            The hero section slideshow <br /> nobody asked for
          </motion.p>
        </motion.div>
      </ImagesSlider>
    </>
  )
}

export default Home