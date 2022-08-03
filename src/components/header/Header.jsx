import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assests/ME.jpg';
import HeaderSocials from './HeaderSocials';
import Typical from "react-typical";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am <span className="highlighted-text">Pragya</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Java Developer 😎",
                    1000,
                    "Frontend Developer 👩‍🎨",
                    1000,
                    "React Beginner 👩‍🏭",
                    1000 /*  */,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front and back end
                operations.
              </span>
            </span>
          </div>
        <CTA />
        <HeaderSocials /> 
      
      
    
      
      
      

       <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#conact" className="scroll__down">Scroll Down</a> 
      </div>
      </header>
  

  )
}

export default Header
