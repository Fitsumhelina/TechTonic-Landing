import React from "react";
import Card from "./Coreteam";

const content = [
  {
    title: "Card 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon1: "path/to/icon1.svg", // You can use real icons or SVG paths
    icon2: "path/to/icon2.svg",
  },
  {
    title: "Card 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon1: "path/to/icon1.svg",
    icon2: "path/to/icon2.svg",
  },
  // Add 8 more card objects...
  {
    title: "Card 10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon1: "path/to/icon1.svg",
    icon2: "path/to/icon2.svg",
  },
];

const Coreteamlist = () => {
  return (
    <div className="grid grid-cols-2 gap-6 p-10 md:grid-cols-3 lg:grid-cols-5">
      {content.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
          icon1={item.icon1}
          icon2={item.icon2}
        />
      ))}
    </div>
  );
};

export default Coreteamlist;
