import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/AppContext'
import Products from '../components/Products'
import CartItems from '../components/CartItems'

const Cart = () => {
  const { cart } = useContext(AppContext)

  return (
    <CartItems />
  )
}

export default Cart