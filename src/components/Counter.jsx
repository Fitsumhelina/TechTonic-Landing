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
  const [downloads, setDownloads] = useState(0);
  const [awards, setAwards] = useState(0);
  const [likes, setLikes] = useState(0);
  const [recommended, setRecommended] = useState(0);

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
      animateValue(0, 1590, 2000, setDownloads);
      animateValue(0, 3500, 2000, setAwards);
      animateValue(0, 1199, 2000, setLikes);
      animateValue(0, 2200, 2000, setRecommended);
    }
  }, [isVisible]);

  return (
    <div className="counter-section" ref={counterRef}>
      <h2>We Never Stop Improving</h2>
      <div className="counter-container">
        <div className="counter-item">
          <div className="icon">⬇️</div>
          <h3>{downloads}+</h3>
          <p>DOWNLOAD</p>
        </div>
        <div className="counter-item">
          <div className="icon">🏆</div>
          <h3>{awards}+</h3>
          <p>AWARDS</p>
        </div>
        <div className="counter-item">
          <div className="icon">👍</div>
          <h3>{likes}+</h3>
          <p>LIKE</p>
        </div>
        <div className="counter-item">
          <div className="icon">✔️</div>
          <h3>{recommended}+</h3>
          <p>RECOMMENDED</p>
        </div>
      </div>
    </div>
  );
}

export default Counter;
