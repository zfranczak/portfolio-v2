import React from 'react'
import './Modal.css'

const Modal = ({ setShowModal }) => {
  const closeModal = () => {
    setShowModal(false)
    document.body.classList.remove('active-modal') // remove the active-modal class from the body element
  }

  return (
    <div className='modal'>
      <div onClick={closeModal} className='overlay'></div>
      <div className='modal-content'>
        <h2 className='modal-title'>Thanks for the Message</h2>
        <p className='modal-text'>
          Thank you for reaching out! I have received your message and will get
          back to you as soon as possible. Have a great day!
        </p>
        <button className='close-modal' onClick={closeModal}>
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default Modal
