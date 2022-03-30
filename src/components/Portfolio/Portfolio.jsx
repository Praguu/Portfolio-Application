import React from 'react';
import './portfolio.css';
import IMG1 from '../../assests/portfolio1.jpg';
import pizza from '../../assests/pizza-img.jpeg';
import tour from '../../assests/Tour.png';
import camra from '../../assests/imag.jpeg';



const data =[
  {
    id:1,
    image:pizza,
    title:'Pizza Store Application',
    description : 'React Appication',
    github:'https://github.com/Praguu/pizzaApplication',
    demo:'https://praguu.github.io/pizzaApplication/'
  },
  {
    id:2,
    image:camra,
    title:'Vision Fixel Application',
    description: 'Image Processing',
    github:'https://github.com/Er-Rakesh-Yadav/Vision-Fixel',
    demo:'https://github.com/Er-Rakesh-Yadav/Vision-Fixel'
  },
  {
    id:3,
    image:tour,
    title:'Tour Traveling Application',
    description: 'Frontend Application',
    github:'https://github.com/pragya-sharma/tourtravels',
    demo:'https://pragya-sharma.github.io/tourtravels/'
  },
  {
    id:4,
    image:'https://www.webdevelopersnotes.com/wp-content/uploads/transparent-watermark.png',
    title:'Image Watermark Application',
    description:'Python based Application',
    github:'https://github.com/pragya-sharma/waterMarking',
    demo:'https://github.com/pragya-sharma/waterMarking'
  }
]

const Portfolio = () => {
  return (
   <section id='portfolio'>
     <h5>My Recent Work</h5>
     <h2>Portdolio</h2>
      <div className="container  portfolio__container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                 <div className='portfolio__item-image'>
                     <img src={image} alt=""/>
                 </div>
                 <h3>{title}</h3>
                 <div className='portfolio__item-cta'>
                   <a href={github} className='btn' target='_blank'>Github</a>
                   <a href={demo} className='btn btn-primary' target='_blank'>Demo Live</a>
                 </div> 
              </article>
            )
          }

          )
        }
      </div>

   </section>
  )
}

export default Portfolio
