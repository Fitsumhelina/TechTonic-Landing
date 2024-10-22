import React, { useRef, useState } from 'react';
import './../scss/Partners.scss'; 
import logo1 from './../../public/assets/dbu.png'
import logo2 from './../../public/assets/gcode.jpg'

function Partners() {
  const [activeIndex, setActiveIndex] = useState(0); // Track active page index
  const scrollRef = useRef(null); // Reference to the scrollable container

  // Clients data (you can replace logos with actual paths)
  const clients = [
    { name: 'DBU', logo: logo1 },
    { name: 'Gcode', logo: logo2},
  ];

  const logosPerPage = 4;
  const totalPages = Math.ceil(clients.length / logosPerPage); // Total number of pages

  const handleClick = (index) => {
    setActiveIndex(index); // Update the active page index
    const scrollWidth = scrollRef.current.offsetWidth; // Get the width of the scrollable container
    scrollRef.current.scrollTo({ left: scrollWidth * index, behavior: 'smooth' }); // Scroll to the next page
  };

  return (
    <div className="partners-container">
      <h2 className="title">PARTNERS</h2>
      <div className="underline"></div>

      {/* Scrollable container for client logos */}
      <div className="clients-logos-wrapper" ref={scrollRef}>
        <div className="clients-logos" style={{ width: `${100 * totalPages}%` }}>
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="clients-page">
              {clients.slice(pageIndex * logosPerPage, (pageIndex + 1) * logosPerPage).map((client, index) => (
                <div key={index} className="client-logo">
                  <img src={client.logo} alt={client.name} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      {totalPages > 1 && (
        <div className="pagination-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Partners;
