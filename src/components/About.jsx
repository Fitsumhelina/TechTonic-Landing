"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
// import your images from the public folder
import pic1 from './../../public/assets/about1.jpeg';
import pic2 from './../../public/assets/about2.jpeg';
import pic3 from './../../public/assets/about3.jpeg';
import pic4 from './../../public/assets/about4.jpg';

const content = [
  {
    title: "Location and What It Does",
    description: "TechTonic Tribe Club is based at Debre Berhan University, where it operates as a hub for students passionate about technology. The name 'TechTonic' reflects the club's focus on technological innovations and the dynamic environment it fosters for learning and collaboration. The club offers various programs, from full-stack development to workshops in areas like Python and React, aimed at developing tech skills and leadership among students.",
    imageSrc: pic1,
  },
  {
    title: "How It Was Founded",
    description: "TechTonic Tribe Club was founded in 2024 by a group of fifth-year software engineering students at Debre Berhan University. The club was created with the official approval of the university to meet the growing interest in technology on campus. Its founders envisioned a space where students could learn, collaborate, and grow through mentorship and shared experiences in the field of technology.",
    imageSrc: pic2,
  },
  {
    title: "Current Services of the Club",
    description: "structured programs in full-stack development, short workshops on emerging technologies, and specialized training in React. In addition, the club prepares students for hackathons, team challenges, and project-based learning experiences, encouraging practical applications of technical skills.",
    imageSrc: pic3,
  },
  {
    title: "Vision",
    description: "Vision: The vision of TechTonic Tribe Club is to develop future leaders who not only excel in technology but also contribute to their communities with creativity, ethical leadership, and a collaborative spirit. The club seeks to build a community of learners who are equipped to make a lasting impact in the tech industry",
    imageSrc: pic4,
  },
];

function About() {
  return (
    <div className="p-10 bg-white font-sans text-white"> 
      <StickyScroll content={content} />
    </div>
  );
}

export default About;
