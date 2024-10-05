import React from "react";
import "./styles.scss"; // Import the SASS file

const Partners = () => {
  // List of partner logos (you'll replace the URLs with actual paths)
  const logos = [
    { name: "Square", url: "https://via.placeholder.com/100" },
    { name: "Evernote", url: "https://via.placeholder.com/100" },
    { name: "Foursquare", url: "https://via.placeholder.com/100" },
    { name: "The Guardian", url: "https://via.placeholder.com/100" },
    { name: "Shopify", url: "https://via.placeholder.com/100" },
    { name: "Pinterest", url: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="partners-container">
      <div className="scrolling-logos">
        {logos.map((logo, index) => (
          <div className="logo" key={index}>
            <img src={logo.url} alt={logo.name} />
          </div>
        ))}
        {/* Repeat the logos for infinite scrolling */}
        {logos.map((logo, index) => (
          <div className="logo" key={index + logos.length}>
            <img src={logo.url} alt={logo.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
