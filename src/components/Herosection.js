import React, { useState, useEffect, useMemo } from 'react';
import './herosection.css';

export default function Herosection() {
  const texts = useMemo(() => [
    "Web Developer",
    "UI/UX Designer",
    "WordPress Developer",
    "Flutter Developer"
  ], []);

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (typingIndex < texts[currentTextIndex].length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[currentTextIndex][typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 100); // Adjust typing speed here
      return () => clearTimeout(typingTimeout);
    } else {
      // Transition to the next text after some delay
      const transitionTimeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setDisplayedText('');
        setTypingIndex(0);
      }, 2000); // Adjust the delay before starting to type the next text
      return () => clearTimeout(transitionTimeout);
    }
  }, [typingIndex, texts, currentTextIndex]);

  return (
    <div>
      <div className='herosec'>
        <div className='ab heroo'>
          <div className='portfoliodiv'><p>Welcome to our Portfolio</p></div>
          <div className='herotxt'>
            <h1>Hi! We are Probsols, <br />a <span className="typing-text"><b>{displayedText}</b></span></h1>
            {/* <br /> */}
            <p>Welcome to Probsols! We are a dynamic company offering a wide range of <br/>
             digital services to help your business excel. Our expertise includes <br/>
            UI/UX design, WordPress development, React.js, Flutter development, and <br/>
             graphic design. At Probsols, we are dedicated to transforming your vision<br/>
              into reality with creativity and excellence.<br/><br/>
               Let's create something amazing together!</p>

               <div className='letsconnect'><button><b>Let's Connect</b><img src='arrow.png' alt="Arrow"/></button></div>
          </div>
        </div>
        <div className='heroimg'><img src="Untitled-1.png" alt="Hero" /></div>
      </div>
      
    </div>
  );
}
