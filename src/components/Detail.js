import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detail.css';

export default function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    title = "Default Title",
    subtitle = "Default Subtitle",
    description = "Default description",
    client = "Default client",
    tools = "Default tools",
    link = "http://example.com",
    videoSrc = "default.mp4"
  } = location.state || {};

  React.useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

  return (
    <div className='detail-container'>
      <div className='txtimg'>
        <div className='text-content'>
          <p className='detailtitle'>{title}</p>
          <h1 className='detailsub'>{subtitle}</h1>
          <p className='detaildes'>{description}</p>
          <br /><br />
          <h1 className='projecthighlight'><b>Project Highlights:</b> <hr/></h1>
          <div className='clienttxt'><h2><b>Client:</b></h2>{client}</div>
          <div className='clienttxt'><h2><b>Tools:</b></h2>{tools}</div>
          <div className='clienttxt'><h2 className='link'><b>Link:</b></h2><a href={link} target="_blank" rel="noopener noreferrer">Click to open the Link</a></div>
          
          
        </div>
        
    </div>
    <div className='detailvideo'><video src={videoSrc} controls /></div>
  </div>
  );
}
