import React, { useState, useEffect } from 'react';
import '../scss/Home.scss';  // Import the SCSS file
import Header from './Header';

const images = [
  'https://media.licdn.com/dms/image/v2/D4E22AQFcaaWl2qchsA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1709655117385?e=1730937600&v=beta&t=AR_JjhKJaZ8P-fzYyR3zmF2yQKse4vcWzo-3q0w1GlI',
  'https://media.licdn.com/dms/image/v2/D4E22AQHbBsZSmwVuxw/feedshare-shrink_1280/feedshare-shrink_1280/0/1709655113234?e=1730937600&v=beta&t=cLUSRCiaqDbN719jIfiApO59W_TZ9BQTOZ42e9kLkdk', // Add more image URLs here
  'https://media.licdn.com/dms/image/v2/D4E22AQFokF_GbuvW4w/feedshare-shrink_1280/feedshare-shrink_1280/0/1704027237800?e=1730937600&v=beta&t=jUuntIOy_tzMSW5Bnb_dg_Xu2crVPeHTrYRyD8TloXA', // Example image
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        <Header />
        {/* Other content can go here */}
      </div>
    </>
  );
}

export default Home;
