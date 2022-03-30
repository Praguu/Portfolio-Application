import React from 'react';
import './about.css';
import ME from '../../assests/ME.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
                <div className="about__me-image">
                  <img src={ME} alt='' />
                </div>
        </div>
        <div className="about__content">
                        <div className="about__cards">
                          <article className='about__card'>
                            <FaAward className='about__icon'/>
                          <h5>Experience</h5>
                          <small>3+ Years Working</small>
                          </article>
                          <article className='about__card'>
                            <FiUsers className='about__icon'/>
                          <h5>Clients</h5>
                          <small>200+ Worldwide</small>
                          </article>
                          <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                          <h5>Experience</h5>
                          <small>3+ Years Working</small>
                          </article>

                        </div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus minima explicabo? Itaque voluptas, neque est assumenda voluptate laboriosam quibusdam quidem eos laudantium harum consequatur nisi ab provident nobis expedita.
                        </p>
                        <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
