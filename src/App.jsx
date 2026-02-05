import React, { useEffect } from 'react'
import MainRoutes from './routes/MainRoutes'
import Nav from './components/Nav'
import { useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to element matching the hash (if present) when location changes
    if (location.hash) {
      const id = location.hash.replace('#', '')
      // slight delay to ensure elements are mounted
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }, [location])

  return (
    <div className=' flex flex-col '>
      <Nav />
      <MainRoutes />
    </div>
  )
}

export default App
