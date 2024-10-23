import React, { useRef } from "react";
import Team from "./Team"; // Ensure this points to your Team component
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Using react-icons for arrows
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons
import image1 from './../../public/assets/me.jpg'
import image2 from './../../public/assets/yab.jpg'
import image3 from './../../public/assets/tnbi.jpeg'
import image4 from './../../public/assets/kis.jpg'
import image5 from './../../public/assets/ts.jpg'
import image6 from './../../public/assets/beti.jpg'
import image7 from './../../public/assets/nar.jpeg'
const content = [
  {
    title: "Fitsum Helina",
    role: "President",
    imageUrl: image1,
    socialLinks: [
      { platform: 'Telegram', url: 'https://t.me/per_777', icon: <FaTelegram /> },
      { platform: 'Github', url: 'https://github.com/Fitsumhelina', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://www.linkedin.com/in/fitsumhelina/', icon: <FaLinkedin /> },
    ]
  },
  {
    title: "Kisanet H/mariyam",
    role: "Vice President",
    imageUrl: image4,
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
 
  {
    title: "Yeabsira Behailu",
    role: "Event Organizer",
    imageUrl: image2,
    socialLinks: [
      { platform: 'Telegram', url: 'https://t.me/Yabe400', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  {
    title: "Tinbite Elias",
    role: "Education lead",
    imageUrl: image3,
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  
  {
    title: "Nardos Anteneh",
    role: "Social Media Manager",
    imageUrl: image7,
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
 
  {
    title: "Fitsum Enunu",
    role: "Content Creator",
    imageUrl: image5,
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
 
  {
    title: "Betelhem Hiluf ",
    role: "Membership&Recruit Leader ",
    imageUrl: image6,
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  {
    title: "Kalkidan K/mariyam ",
    role: "Event Coordinator",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEfM1ZF1q-4GA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1727245514587?e=1735171200&v=beta&t=mgOzFGUaUv7G0GPa7u6uMfN4C7Hw9pl2V3dKFa7ZSqs",
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
 
  
];
const Teams = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, // Adjust scroll distance as per card width
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, // Adjust scroll distance as per card width
      behavior: "smooth",
    });
  };

  return (
    <>
      <h1 className="text-center text-customBlue text-3xl font-bold mb-2 mt-12">Meet The Team</h1>
      
      <div className="relative mr-30 ml-30">
        {/* Scroll Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 hover:bg-customBlue p-3 rounded-full z-10"
          onClick={scrollLeft}
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 hover:bg-customBlue p-3 rounded-full z-10"
          onClick={scrollRight}
        >
          <FiChevronRight size={24} />
        </button>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll space-x-6 p-10 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} // Hide scrollbar
        >
          {content.map((item, index) => (
            <div key={index} className="snap-start">
              <Team
                imageUrl={item.imageUrl}
                title={item.title}
                role={item.role}
                socialLinks={item.socialLinks}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
