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
          playsinline
        />
      </div>
    </div>
  );
};

const WorkSection = () => {
  const navigate = useNavigate();
  const items = [
    {
      title: "UI/UX",
      subtitle: "User Interface of BarnVest App",
      videoSrc: "Barnvest.mp4",
      description: "For this project, We collaborated with Roland, a client based in Nigeria, to design the user interface for Barnvest, an innovative e-commerce app. Barnvest is a platform that facilitates the seamless buying and selling of goods, aiming to provide users with an intuitive and efficient shopping experience.",
      client: "Roland, Nigeria",
      tools: "Figma",
      imageSrc: "teamwork.png",
      link: "https://www.figma.com/design/mgEQ62g97xjVnrC0nwjU6h/Barnvest?node-id=0-1&t=HtZb4aQLHpVRYBnV-1"
    },
    {
      title: "WordPress",
      subtitle: "Wordpress Development of Castle&Co",
      videoSrc: "castleco.mp4",
      description: "For this project, We collaborated with Christian, a client based in United States, to develop the wordpress site for Castel&Co, an innovative e-commerce app. Castle&Co is a platform that facilitates the seamless selling of Rugs, aiming to provide users with an intuitive and efficient shopping experience.",
      client: "Chritian, United States ",
      tools: "WordPress, PHP",
      imageSrc: "wordpress.png",
      link: "https://castelandco.com.au/"
    },
    {
      title: "React.js",
      subtitle: "React.js Development of Probsolz",
      videoSrc: "probsolz.mp4",
      description: "Description for React.js project.",
      client: "Client C",
      tools: "React, JavaScript",
      imageSrc: "react.png",
      link: "http://example.com"
    }
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
      <div className='workbutton'><button onClick={() => navigate('/work-main')}>View More</button></div>
    </div>
  );
};

export default WorkSection;
