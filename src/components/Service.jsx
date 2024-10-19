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
      "title": "BOOTCAMP",
      "description": "Join our BOOTCAMP for comprehensive training in MERN stack development, designed to equip you with the skills needed for a successful tech career."
    },
    {
      "title": "WORKSHOPS",
      "description": "Participate in our WORKSHOPS, where we offer focused, short-term training sessions to enhance your skills and knowledge in various tech domains."
    },
    {
      "title": "COMMUNITY-SERVICES",
      "description": "Explore our COMMUNITY-SERVICES that provide free training programs for high school students and others, empowering the next generation with essential tech skills."
    },
    {
      "title": "EVENTS",
      "description": "Engage with our EVENTS, featuring tech-oriented gatherings that foster innovation and collaboration among tech enthusiasts and professionals."
    },
    {
      "title": "TECHNICAL-ADVICE",
      "description": "Receive expert TECHNICAL-ADVICE to navigate the complexities of technology, ensuring you make informed decisions and find effective solutions."
    },
    {
      "title": "WEBSITE-DEVELOPMENT",
      "description": "Take advantage of our WEBSITE-DEVELOPMENT services, designed to help you create a strong online presence that effectively represents your brand or business."
    }
  
];

// Service component to display the hover effect demo
function Service() {
  return (

    <div>
      <h1 className="text-center text-3xl font-bold mb-2 mt-12 text-customBlue">Our Services</h1>
      <CardHoverEffectDemo />
    </div>
  );
}

export default Service;
