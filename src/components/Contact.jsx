import '../styles/Contacts.css';
import moon from '../assets/moon.jpg';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal/Modal';

const Contacts = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_yrndhch',
        'template_u96pitl',
        form.current,
        'wB54rgdeqjoSQJk2_'
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact-container' id='contact'>
      <div className='contact-box'>
        <form ref={form} onSubmit={sendEmail} className='form'>
          <div className='inputs'>
            <div className='text-contact'>
              <h2>Let's work together!</h2>
              <p>Together, we can make a positive impact on the world.</p>
              <span className='email'>zakfranczak@gmail.com</span>
            </div>
            <div className='form-container'>
              <div className='name-box'>
                <label>Name</label>
                <input
                  type='text'
                  name='user_name'
                  required=''
                  placeholder='Enter your name'
                />
              </div>
              <div className='name-box'>
                <label>Email</label>
                <input
                  type='email'
                  name='user_email'
                  required=''
                  placeholder='Enter your email'
                />
              </div>
              <div className='name-box' id='message-container'>
                <label>Message</label>
                <textarea
                  name='message'
                  required=''
                  placeholder='Enter your message'
                  id='message-box'
                />
              </div>
              <input type='submit' value='Send' className='submit-btn' />
            </div>
          </div>
          {/* <div className='contact-img'>
            <img className='moon' src={moon} alt='Reach For The Moon' />
          </div> */}
        </form>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
};

export default Contacts;
