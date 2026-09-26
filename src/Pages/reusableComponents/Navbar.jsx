import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <NavLink to="p_i">Product_items</NavLink>
      <NavLink to="/wishlist">Wishlist</NavLink>

    </nav>
  )
}
