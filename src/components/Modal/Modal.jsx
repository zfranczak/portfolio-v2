import React from 'react'
import './Modal.css'

const Modal = () => {
  return (
    <div className='modal'>
      <div onClick={toggleModal} className='overlay'></div>
      <div className='modal-content'>
        <h2>Hello Modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          numquam modi molestias dolores? Veniam dicta eveniet id totam qui
          aspernatur nulla, quos exercitationem magni tempora, voluptatum ipsa.
          Voluptates, saepe quibusdam.
        </p>
        <button className='close-modal' onClick={toggleModal}>
          CLOSE
        </button>
      </div>
    </div>
  )
}

export default Modal
