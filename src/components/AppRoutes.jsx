import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Reviews from './Reviews.jsx'
import Contact from './Contact.jsx'
import Navbar from './navbar/Navbar.jsx'

function AppRoutes() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact/*" element={<Contact currRoute="/contact" />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </>
  )
}

export default AppRoutes