import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className=' flex flex-col '>
      <Nav />
      <MainRoutes />
    </div>
  )
}

export default App
