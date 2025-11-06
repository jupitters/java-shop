import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/AppContext'
import Products from '../components/Products'
import CartItems from '../components/CartItems'
import { Modal } from 'react-bootstrap'

const Cart = () => {
  const { showModal } = useContext(AppContext)

  return (
    <div>
      <CartItems />
      {showModal && <Modal />}
    </div>
    
  )
}

export default Cart