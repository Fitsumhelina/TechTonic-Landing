import React, { useState, useEffect, useRef } from 'react';
import './../scss/Counter.scss';

// Helper function to handle the counting animation
const animateValue = (start, end, duration, setCounter) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    setCounter(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

function Counter() {
  const [isVisible, setIsVisible] = useState(false);
  const [students, setStudents] = useState(0);
  const [hackathons, setHackathons] = useState(0);
  const [coreteam, setCoreteam] = useState(0);
  const [experiance, setExperiance] = useState(0);

  const counterRef = useRef(null);

  // Scroll listener to detect when the counter section is in view
  useEffect(() => {
    const handleScroll = () => {
      if (counterRef.current) {
        const { top, bottom } = counterRef.current.getBoundingClientRect();
        const isInView = top >= 0 && bottom <= window.innerHeight;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // Trigger the counters once the section is visible
  useEffect(() => {
    if (isVisible) {
      animateValue(0, 300, 800, setStudents);
      animateValue(0, 4, 100, setHackathons);
      animateValue(0, 20, 2000, setCoreteam);
      animateValue(0, 1, 10, setExperiance);
    }
  }, [isVisible]);

  return (
    <div className="counter-section" ref={counterRef}>
      <h2>Our Community Have </h2>
      <div className="counter-container">
        <div className="counter-item">
          <div className="icon"><img src="https://cdn-icons-png.flaticon.com/128/17643/17643595.png" alt="" /></div>
          <h3>{students}+</h3>
          <p>Students</p>
        </div>
        <div className="counter-item">
          <div className="icon"><img src="https://cdn-icons-png.flaticon.com/128/17872/17872699.png" alt="" /></div>
          <h3>{hackathons}+</h3>
          <p>Hackathons</p>
        </div>
        <div className="counter-item">
          <div className="icon"><img src="https://cdn-icons-png.flaticon.com/128/10691/10691841.png" alt="" /></div>
          <h3>{coreteam}+</h3>
          <p>Core Teams</p>
        </div>
        <div className="counter-item">
          <div className="icon"><img src="https://cdn-icons-png.flaticon.com/128/3652/3652191.png" alt="" /></div>
          <h3>{experiance}+</h3>
          <p>Experiance</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
