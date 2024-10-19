import React, { useRef, useState } from 'react';
import './../scss/Partners.scss'; // Import CSS for styling


function Partners() {
  const [activeIndex, setActiveIndex] = useState(0); // Track active client
  const scrollRef = useRef(null); // Reference to the scrollable container

  const clients = [
    { name: 'Square', logo: '/path/to/square-logo.png' },
    { name: 'Evernote', logo: '/path/to/evernote-logo.png' },
    { name: 'Foursquare', logo: '/path/to/foursquare-logo.png' },
    { name: 'The Guardian', logo: '/path/to/guardian-logo.png' },
    { name: 'Shopify', logo: '/path/to/shopify-logo.png' },
    { name: 'Pinterest', logo: '/path/to/pinterest-logo.png' }
  ];

  const handleClick = (index) => {
    setActiveIndex(index); // Update the active index
    const scrollWidth = scrollRef.current.offsetWidth; // Get the width of the scrollable container
    scrollRef.current.scrollTo({ left: scrollWidth * index, behavior: 'smooth' }); // Scroll to the next page
  };

  return (
    <div className="partners-container">
      <h2 className="title">CLIENTS</h2>
      <div className="underline"></div>
      
      <div className="clients-logos-wrapper" ref={scrollRef}>
        <div className="clients-logos">
          {clients.map((client, index) => (
            <div key={index} className="client-logo" onClick={() => handleClick(index)}>
              <img src={client.logo} alt={client.name} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="pagination-dots">
        {clients.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Partners;
