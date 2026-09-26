import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar"
import Product_items from '../Home/Product_items'

export default function Layout() {
  return (
    <>
      <Navbar/>
     
      <main>
        <Outlet/>
      </main>
    </>
  )
}
