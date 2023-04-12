import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import { Navbar } from './Component/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
