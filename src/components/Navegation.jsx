import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import Image from 'react-bootstrap/Image'

const Navegation = () => {
  return (
    <>
      <Navbar
        bg='danger'
        variant='dark'
        className='nav-principal'
      >
        <Container className='justify-content-start'>
          <div className='link'>
            <Link
              to='/'
              className='text-white ms-3 text-decoration-none'
            >
              <Image src='./src/assets/img/casa.png' className='img' />
              Home
            </Link>
            <Link
              to='/Contacto'
              className='text-white ms-3 text-decoration-none'
            >
              <Image src='./src/assets/img/cuaderno.png' className='img' />
              Contacto
            </Link>
          </div>
        </Container>
        <div>
          <Navbar.Brand className='p-5'>Happy Cake 🍰</Navbar.Brand>
        </div>
      </Navbar>
    </>

  )
}

export default Navegation
