import React, { useRef } from "react";
import Team from "./Team"; // Ensure this points to your Team component
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Using react-icons for arrows
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons
const content = [
  {
    title: "Card 1",
    role: "Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  {
    title: "Card 1",
    role: "Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  {
    title: "Card 1",
    role: "Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  {
    title: "Card 1",
    role: "Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  {
    title: "Card 1",
    role: "Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  
  {
    title: "Card 1",
    role: "Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  
  {
    title: "Card 1",
    role: "Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  
  {
    title: "Card 1",
    role: "Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com', icon: <FaTelegram /> },
      { platform: 'twitter', url: 'https://twitter.com', icon: <FaGithub /> },
      { platform: 'linkedin', url: 'https://linkedin.com', icon: <FaLinkedin /> },
    ]
  },
  
  {
    title: "Card 1",
    role: "Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
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
