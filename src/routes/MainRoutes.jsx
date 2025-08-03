import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../sections/Home'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Contact from '../sections/Contact'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  )
}

export default MainRoutes