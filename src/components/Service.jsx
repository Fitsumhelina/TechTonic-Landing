import React from 'react';
import { HoverEffect } from "./ui/card-hover-effect";

// CardHoverEffectDemo function moved here to use within Service component
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

// The project data to be displayed
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",

  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
 
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
   
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",

  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
   
  },
];

// Service component to display the hover effect demo
function Service() {
  return (

    <div>
      <h1 className="text-center text-3xl font-bold mb-2 mt-12">Our Services</h1>
      <CardHoverEffectDemo />
    </div>
  );
}

export default Service;
