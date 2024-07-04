import React, { useRef, useState } from 'react';
import './WorkSection.css';

const WorkItem = ({ title, subtitle, videoSrc, reverse, onClick }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handlePlayButtonClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className={`work-item ${reverse ? 'reverse' : ''}`} onClick={onClick}>
      <div className='text-container'>
        <h3 className='work-title'>{title}</h3>
        <h4 className='work-subtitle'>{subtitle}</h4>
      </div>
      <div className='work-video' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <video
          src={videoSrc}
          loop
          playsInline
          style={{ objectFit: 'contain' }}
          ref={videoRef}
        />
        {!isPlaying && (
          <div className='play-button' onClick={handlePlayButtonClick}>
            ►
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkItem;
