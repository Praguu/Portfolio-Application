import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FiGithub} from 'react-icons/fi';


const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href='https://github.com/pragya-sharma' target="_blank"><FiGithub /></a>
      <a href='https://www.linkedin.com/in/pragya-sharma-5ab12a18b/' target="_blank"><BsLinkedin /></a>
      
    </div>
  );
}

export default HeaderSocials;
