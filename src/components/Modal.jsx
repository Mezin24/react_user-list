import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'

function Modal({handleModal, msg}) {

  return (
    <div className="overlay" onClick={handleModal}>
      <Card className='modal container'>
        <div className='modal-header'>
          <h3>Invali Input</h3>
        </div>
        <div className="modal-body">
          <p>{msg}</p>
          <Button handleClick={handleModal}>Okay</Button>
        </div>
      </Card>
    </div>
  )
}

export default Modal