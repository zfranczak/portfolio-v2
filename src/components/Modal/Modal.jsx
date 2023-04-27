import React, { useRef, useState } from 'react'
import './Modal.css'

const Modal = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className='btn-modal'>
        Open
      </button>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium numquam modi molestias dolores? Veniam dicta eveniet
              id totam qui aspernatur nulla, quos exercitationem magni tempora,
              voluptatum ipsa. Voluptates, saepe quibusdam.
            </p>
            <button className='close-modal' onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
