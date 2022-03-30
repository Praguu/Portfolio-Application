import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assests/ME.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i am</h5>
        <h1>pragya sharma</h1>
        <h5 className='text-light'>Mern stack devloper</h5>
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
