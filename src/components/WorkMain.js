import React, { useRef } from 'react';
import './WorkSection.css';
import { useNavigate } from 'react-router-dom';

const WorkItem = ({ title, subtitle, videoSrc, reverse, onClick }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className={`work-item ${reverse ? 'reverse' : ''}`} onClick={onClick}>
      <div className='text-container'>
        <h3 className='work-title'>{title}</h3>
        <h4 className='work-subtitle'>{subtitle}</h4>
      </div>
      <div className='work-video'>
        <video
          src={videoSrc}
          loop
          muted
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

const WorkSection = () => {
  const navigate = useNavigate();
  const items = [
    { title: "UI/UX", subtitle: "User Interface & User Experience", videoSrc: "ui.mp4", description: "For this project, We collaborated with Roland, a client based in Nigeria, to design the user interface for Barnvest, an innovative e-commerce app. Barnvest is a platform that facilitates the seamless buying and selling of goods, aiming to provide users with an intuitive and efficient shopping experience.", client: "Roland, Nigeria", tools: "Figma", imageSrc: "teamwork.png" },
    { title: "WordPress", subtitle: "Custom Themes & Plugins", videoSrc: "wp.mp4", description: "We developed custom themes and plugins for WordPress to enhance the functionality and appearance of various websites, focusing on user experience and performance.", client: "Multiple Clients", tools: "WordPress, PHP", imageSrc: "teamwork.png" },
    { title: "React.js", subtitle: "Dynamic Web Applications", videoSrc: "wp.mp4", description: "Our team built dynamic and responsive web applications using React.js, ensuring high performance and a seamless user experience.", client: "Tech Startups", tools: "React.js, JavaScript", imageSrc: "teamwork.png" },
    { title: "UI/UX", subtitle: "User Interface & User Experience", videoSrc: "ui.mp4", description: "For this project, We collaborated with Roland, a client based in Nigeria, to design the user interface for Barnvest, an innovative e-commerce app. Barnvest is a platform that facilitates the seamless buying and selling of goods, aiming to provide users with an intuitive and efficient shopping experience.", client: "Roland, Nigeria", tools: "Figma", imageSrc: "teamwork.png" },

    { title: "UI/UX", subtitle: "User Interface & User Experience", videoSrc: "ui.mp4", description: "For this project, We collaborated with Roland, a client based in Nigeria, to design the user interface for Barnvest, an innovative e-commerce app. Barnvest is a platform that facilitates the seamless buying and selling of goods, aiming to provide users with an intuitive and efficient shopping experience.", client: "Roland, Nigeria", tools: "Figma", imageSrc: "teamwork.png" },

  ];

  const handleItemClick = (item) => {
    navigate('/detail', { state: item });
  };

  return (
    <div className='work-section'>
      <h1 className='work-heading'>Our Work</h1>
      <hr />
      {items.map((item, index) => (
        <WorkItem
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          videoSrc={item.videoSrc}
          reverse={index % 2 !== 0}
          onClick={() => handleItemClick(item)}
        />
      ))}
      
    </div>
  );
};

export default WorkSection;
