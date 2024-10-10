import React, { useEffect, useRef, useState } from "react";
import "./../scss/Partner.scss"; // Import the SASS file

const Partners = () => {
  const logos = [
    { name: "yabsira", url: "https://avatars.githubusercontent.com/u/166545362?v=4" }
  ];

  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Duplicate the logos for seamless scrolling
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <div
      className="partners-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={containerRef}
    >
      <div
        className={`scrolling-logos ${isHovering ? "paused" : ""}`}
        ref={scrollerRef}
      >
        {logos.map((logo, index) => (
          <div className="logo" key={index}>
            <img src={logo.url} alt={logo.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
