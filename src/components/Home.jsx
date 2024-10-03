import React, { useState, useEffect } from 'react';
import '../scss/Home.scss';

const images = [
  'https://media.licdn.com/dms/image/v2/D4E22AQFI83JUa-BSMw/feedshare-shrink_800/feedshare-shrink_800/0/1717747961232?e=1730937600&v=beta&t=UVFzZt49MUg6TjKscjYGhPzBnbVLjZDN5LPlAlZrDcc',
  'https://media.licdn.com/dms/image/v2/D4E22AQEzczar5E4Phg/feedshare-shrink_800/feedshare-shrink_800/0/1717747961335?e=1730937600&v=beta&t=OM41JajwcPrlxS1MzbyDs6Fn4-U4eYolgCdGTfq0VRk',
  'https://media.licdn.com/dms/image/v2/D4E22AQFAgijLxS9Hvw/feedshare-shrink_800/feedshare-shrink_800/0/1717747960918?e=1730937600&v=beta&t=2nkwVS8_lhTLTgUeu9WN3FL4Q7KmwAph2UEmpPT_vqw'
];
function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="overlay">
        <h1>Building the Future of Technology</h1>
      </div>
    </section>
  )
}

export default Home