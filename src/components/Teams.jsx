import React, { useRef } from "react";
import Card from "./Team"; // Ensure this points to your Card component
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Using react-icons for arrows

const content = [
  {
    title: "John Doe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    role: "Fullstack Developer",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
  },
  {
    title: "Jane Smith",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    role: "Frontend Developer",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
  },
  {
    title: "Alice Johnson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    role: "Backend Developer",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
  },
  {
    title: "Bob Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    role: "DevOps Engineer",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
  },
  {
    title: "Chris Green",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    role: "Software Engineer",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
  },
  {
    title: "Diana Prince",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://avatars.githubusercontent.com/u/151903384?v=4",
    role: "Data Scientist",
    socialLinks: [
      { platform: "facebook", url: "#" },
      { platform: "github", url: "#" },
      { platform: "linkedin", url: "#" },
    ],
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
      <h1 className="text-center text-3xl font-bold mb-2 mt-12">Meet The Team</h1>
      
      <div className="relative mr-40 ml-40">
        {/* Scroll Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
          onClick={scrollLeft}
        >
          <FiChevronLeft size={24} />
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
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
              <Card
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
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
