import React from 'react'
import './Skillsection.css'

export default function Skillsection() {
  return (
    <div className='skillmain'>
        <div className='skillall'>
            <div><h1>Skills</h1></div>
            <div className='skilltxt'><p>At Probsols, we excel in React.js, UI/UX Design, WordPress Development, Flutter Development, <br/> and Graphic Design,
             delivering top-notch web and design services</p></div>
          <div className='wheelmain'>
            <div className='wheel' >
                <div>
                    <div className="progress-bar uiux" id='uiux' ></div>
                    <label>UI/UX</label>
                </div>    
            </div>

            <div className='wheel' >
                <div>
                    <div className="progress-bar wp" ></div>
                    <label for="js">Wordpress</label>
                </div>    
            </div>

            <div className='wheel' >
                <div>
                    <div className="progress-bar rt"></div>
                    <label for="js">React.Js</label>
                </div>    
            </div>

          </div>  

        </div>


    </div>
  )
}
