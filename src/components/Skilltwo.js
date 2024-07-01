import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skilltwo.css';

export default function Skilltwo() {
  const skills = [
    { percentage: 94, label: 'UI/UX' },
    { percentage: 89, label: 'WordPress' },
    { percentage: 91, label: 'React.Js' },
    { percentage: 80, label: 'Flutter' },
    { percentage: 98, label: 'Graphic Design' },
    { percentage: 91, label: 'JavaScript' },
    { percentage: 87, label: 'Video Editing' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='skillmain'>
      <div className='skillall'>
        <div><h1>Skills</h1></div>
        <div className='skilltxt'><p>At Probsols, we excel in React.js, UI/UX Design, WordPress Development, Flutter Development, <br /> and Graphic Design, delivering top-notch web and design services</p></div>
        <Slider {...settings} className='wheelmain'>
          {skills.map((skill, index) => (
            <div key={index} className='wheel'>
              
              <CircularProgressbar 
                value={skill.percentage} 
                text={`${skill.percentage}%`} 
                styles={buildStyles({
                  pathColor: '#4901a0',
                  trailColor: '#a45ff9',
                  textColor: 'white',
                  textSize: '16px',
                })}
              />
              <br/>
              <label>{skill.label}</label>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
