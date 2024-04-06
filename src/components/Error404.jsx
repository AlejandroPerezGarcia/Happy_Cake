import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='container'>
      <Image src='./src/assets/img/Not-Found.png' className='error' />
      <br />
      <Link to='/' type='submit' className='btn btn-volver container' id='boton-volver'> Volver</Link>
    </div>
  )
}

export default Error404
