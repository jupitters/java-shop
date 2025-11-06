import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Modal = () => {
    const { selectedProduct, closeModal } = useContext(AppContext)
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <p className="close-icon" onClick={closeModal}>X</p>
        <img src={selectedProduct.images[0]} className="img modal-img" />
        <div className="modal-content">
          <h4>{selectedProduct.name}</h4>
          <p>Description:</p>
          <p> {selectedProduct.description} </p>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>close</button>
        </div>
      </div>
    </aside>
  )
}

export default Modal