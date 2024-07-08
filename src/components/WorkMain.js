import React, { useRef,useState } from 'react';
import './WorkSection.css';
import { useNavigate } from 'react-router-dom';

const WorkItem = ({ title, subtitle, videoSrc, reverse, poster, onClick }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }}

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
    <div className={`work-item ${reverse ? 'reverse' : ''}`} >
      <div className='text-container' onClick={onClick}>
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
          playsInline
          poster={poster}
          className={isPlaying ? 'playing' : ''}
          onClick={handlePlayVideo}
          controls={isPlaying}
        />
        {!isPlaying && (
          <div className="play-button" onClick={handlePlayVideo}>
            
          </div>
        )}
      </div>
    </div>
  );
};


const WorkSection = () => {
  const navigate = useNavigate();
  const items = [
    { poster:"crisscrossthumb.png",title: "Wordpress", subtitle: "Wordpress Development of CrissCross", videoSrc: "Crissc.mp4", description: "For this project, We collaborated with Usman, a client based in Pakistan, to develop the wordpress site, an innovative e-commerce site. Crisscross is a platform that facilitates the seamless buying and selling of Kids Clothing, aiming to provide users with an intuitive and efficient shopping experience.", client: "Usman", tools: "Wordpress", imageSrc: "teamwork.png", link:"https://crisscross.pk/" },
    { poster:"primpixthumb.png", title: "UI/UX", subtitle: "User Interface of Primepix", videoSrc: "Primepix2.mp4", description: "For this project, We collaborated with Nick, a client based in United States, to Create the User Interface, an innovative e-commerce site. Promepix is a platform that facilitates the seamless buying and selling of Electronics, aiming to provide users with an intuitive and efficient shopping experience.", client: "Nick, United States", tools: "Figma", imageSrc: "teamwork.png", link:"https://www.figma.com/design/jgfhYOeLHxObJFGNsc3PoQ/Untitled?node-id=0-1&t=kpVd7KFJwhMAPYjp-1" },
    { poster:"benevitsthumb.png", title: "Social Media Content", subtitle: "Social Media Content for BeneVits", videoSrc: "Benevits.mp4", description: "For this project, We collaborated with Lorcan, a client based in Ireland, to create social media Content for different social Media,Includes Banners design, Carousel ads, Social Media Posts.", client: "Lorcan, Ireland", tools: "Photoshop, Illustrator", imageSrc: "teamwork.png" ,link:"" },
    { poster:"barnvestthumb.png", title: "Flutter", subtitle: "Flutter Development of Barnvest", videoSrc: "Barnvest2.mp4", description: "For this project, We collaborated with Roland, a client based in Nigeria, to develop the Barnvest app, an innovative e-commerce app. Barnvest is a platform that facilitates the seamless buying and selling of goods, aiming to provide users with an intuitive and efficient shopping experience.", client: "Roland, Nigeria", tools: "Flutter, Dart", imageSrc: "teamwork.png", link:"" },

    { poster:"crisscrossthumb.png", title: "Social Media Content", subtitle: "Social Media Content for CrissCross", videoSrc: "Crisscrossdata.mp4", description: "For this project, We collaborated with Usman, a client based in Pakistan, to create social media content for different social media plateforms, Includes Banner Designs, Social Media posts, and Buisness Card.", client: "Usman, Pakistan", tools: "Photoshop, Illustrator", imageSrc: "teamwork.png", link:"" },
    { poster:"scmthumb.png", title: "Social Media Content", subtitle: "Social Media Content for Multiple Clients", videoSrc: "Othercontent.mp4", description: "For this project, We collaborated with different clients, a client based in worldwide, to create social media content for different social media plateforms, Includes Banner Designs, Social Media posts, and Buisness Card.", client: "Multiple Clients", tools: "Photoshop, Illustrator", imageSrc: "teamwork.png", link:"" },
    
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
          poster={item.poster}
        />
      ))}
      
    </div>
  );
};

export default WorkSection;
