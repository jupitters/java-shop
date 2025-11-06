import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/AppContext'
import Products from '../components/Products'
import CartItems from '../components/CartItems'
import { Modal } from 'react-bootstrap'

const Cart = () => {
  const { showModal, fetchUser } = useContext(AppContext)
  const token = localStorage.getItem("token")

  useEffect(()=>{
      fetchUser(token)
    }, [])
  

  return (
    <div>
      <CartItems />
      {showModal && <Modal />}
    </div>
    
  )
}

export default Cart