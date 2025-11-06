import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { AppContext } from '../context/AppContext'

const Cart = () => {
  const { cart} = useContext(AppContext)

  // console.log(cart)
  return (
    <div>
      oi
    </div>
  )
}

export default Cart