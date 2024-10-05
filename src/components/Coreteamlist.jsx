import React, { useRef } from "react";
import Card from "./Coreteam";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Using react-icons for arrows

const content = [
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:"https://avatars.githubusercontent.com/u/151903384?v=4"
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:"https://avatars.githubusercontent.com/u/151903384?v=4"
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:"https://avatars.githubusercontent.com/u/151903384?v=4"
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:"https://avatars.githubusercontent.com/u/151903384?v=4"
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:"https://avatars.githubusercontent.com/u/151903384?v=4"
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:"https://avatars.githubusercontent.com/u/151903384?v=4"
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:"https://avatars.githubusercontent.com/u/151903384?v=4"
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:"https://avatars.githubusercontent.com/u/151903384?v=4"
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:""
  },
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl:""
  },
 
];

const Coreteamlist = () => {
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coreteamlist;
