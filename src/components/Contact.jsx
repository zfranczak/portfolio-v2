import '../styles/Contacts.css'
import moon from '../assets/moon.jpg'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Modal from './Modal/Modal'

const Contacts = () => {
  const form = useRef()
  const [showModal, setShowModal] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_yrndhch',
        'template_u96pitl',
        form.current,
        'wB54rgdeqjoSQJk2_'
      )
      .then(
        (result) => {
          console.log(result.text)
          setShowModal(true) // Set showModal to true on successful form submission
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className='contact-container' id='contact'>
      <div className='contact-box'>
        <form ref={form} onSubmit={sendEmail} className='form'>
          <div className='inputs'>
            <div className='text-container'>
              <h2>Let's work together!</h2>
              <p>
                I am ready to rise to the challenge!<br></br> The effort we put
                in today pays dividens in the future.
              </p>
            </div>
            <div className='name-box'>
              <input
                type='text'
                name='user_name'
                required=''
                placeholder='Enter your name'
              />
              <label>Name</label>
            </div>
            <div className='name-box'>
              <input
                type='email'
                name='user_email'
                required=''
                placeholder='Enter your email'
              />
              <label>Email</label>
            </div>
            <div className='name-box'>
              <textarea
                name='message'
                required=''
                placeholder='Enter your message'
              />
              <label>Message</label>
            </div>
            <input type='submit' value='Send' className='submit-btn' />
          </div>
          <div className='contact-img'>
            <img className='moon' src={moon} alt='Reach For The Moon' />
          </div>
        </form>
      </div>
      {showModal && <Modal />}
    </div>
  )
}

export default Contacts
