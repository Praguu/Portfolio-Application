import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>what skils i have</h5>
      <h2>My experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Devlopment</h3>
          <div className='experience__content'>
            <article className='experience__detail'>
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>


            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>


            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill />
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>


            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill />
              <h4>Bootstrp</h4>
              <small className='text-light'>Experienced</small>


            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill />
              <h4>Reactjs</h4>
              <small className='text-light'>Experienced</small>


            </article>
          </div>
        </div>
    
        <div className='experience__backend'>
        
          <h3>Backend Devlopment</h3>
          <div className='experience__content'>
            <article className='experience__detail'>
              <BsPatchCheckFill />
              <h4>Nodejs</h4>
              <small className='text-light'>Experienced</small>


            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>


            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill />
              <h4>Php</h4>
              <small className='text-light'>Experienced</small>


            </article>
            <article className='experience__detail'>
              <BsPatchCheckFill />
              <h4>mongodb</h4>
              <small className='text-light'>Experienced</small>


            </article>
          
           
        </div>
      </div>
      </div>

    </section>
  )
}

export default Experience
