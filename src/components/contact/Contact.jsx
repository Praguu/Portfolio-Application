import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { useState } from 'react';
import { send } from 'emailjs-com';


const Contact = () => {


const [name,setName] = useState('');
const [email, setEmail] = useState('');
const [message,setMessage] = useState('');

const handleName= (e) =>{
  setName(e.target.value);
}

const handleEmail = (e) =>{
  setEmail(e.target.value);
}

const handleMessage = (e) => {
  setMessage(e.target.value);
}

const sendMail = (e) => {
  e.preventDefault();
  send(
    'service_d1qqjaw',
    'template_ryrjiju',
    {name,email,message},
    'q2_xuXmiJJoU-F2PJ'
  )
  .then((response) => {
    console.log("message successfully submitted", response.status,response.text)
  })
  .catch((err) => {
         console.log('Failed',err)
  })
}

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>pragyash2001@gmail.com</h5>
            <a href='mailto:pragyash2001@gmail.com' target='_blank'>Send message</a>


          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>+9068994541</h4>
            <h5>lll</h5>
            <a href='https://web.whatsapp.com/send?phone?=+916397297760'>Send message</a>


          </article>
          <article className='contact__option'>
            <RiMessengerLine />
            <h4>message</h4>
            <h5>i m meesanger</h5>
            <a href='https://m.me/ernest.achiever'>Send message</a>


          </article>

        </div>
        <form onSubmit={sendMail}>
          <input type='text' name='name' placeholder='your name please ?' value={name} onChange={handleName} required />
          <input type='email' name='email' placeholder='your email' value={email} onChange={handleEmail} required />
          <textarea name='message' rows='7' placeholder='your message' value={message} onChange={handleMessage} required />
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
