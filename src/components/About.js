import React from 'react'
import './About.css'

export default function About() {
  return (
    <div>
        <div className='aboutsec'> 
            <div className='aboutt'>
                <p className='aboutheading'>Who We Are </p>
                <h2 className='aboutsubheading'>Your Digital Solutions <br/> Partner</h2><br/>
                    <p className='aboutpara'>Welcome to Probsolz, where innovation meets excellence.<br/>
                    We are your trusted partner in delivering comprehensive  <br/>
                    digital solutions, specializing in web and mobile app  <br/>
                    development, graphic design, UI/UX design, and video  <br/>
                    editing.
                    <br/><br/>
                    At Probsolz, we believe in the power of technology and<br/>
                    creativity to transform businesses. Our team of skilled <br/>
                    developers, designers, and creatives work collaboratively<br/>
                    to bring your vision to life. We are passionate about crafting<br/>
                    user-friendly, visually stunning, and high-performance digital<br/>
                    experiences that drive growth and success.
                    <br/><br/>
                    Our expertise includes web development with HTML, CSS, JavaScript,<br/>
                    and React.js; mobile app development using Flutter; graphic<br/>
                    design with Adobe Photoshop and Illustrator; UI/UX design with<br/>
                    Figma and Adobe XD; and video editing with Adobe Premiere Pro<br/>
                    and After Effects.
                    <br/><br/>
                    Explore how Probsolz can elevate your business with innovative<br/>
                    digital solutions tailored to your needs.
                    </p>
                    <a href='https://www.upwork.com/freelancers/~01dcf054e52fdc82e0'  target="_blank" rel="noopener noreferrer"><div className='aboutbutton'><button>Explore</button></div></a>
            </div>
            <div className='abtimg'>
            <div className='aboutimg'><img src="aboutsecimg.png" alt="Hero" /></div>
            </div>
        </div>
      
    </div>
  )
}
