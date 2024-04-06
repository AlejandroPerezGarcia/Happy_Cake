import React from 'react'
import Navegation from './components/Navegation'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home.jsx'
import Contacto from './views/Contacto.jsx'
import NotFound from './views/NotFound.jsx'

const App = () => {
  return (
    <>
      <Navegation />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/contacto'
          element={<Contacto />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  )
}

export default App
