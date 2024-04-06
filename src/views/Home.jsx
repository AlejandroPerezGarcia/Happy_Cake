import { Image } from 'react-bootstrap'

const Home = () => {
  return (
    <div className='container mt-5 text-center'>
      <h1>Bienvenido a <span className='fw-bold'> Happy Cake</span></h1>
      <h4> El lugar de los pasteles Felices</h4>
      <Image src='./src/assets/img/torta1.png' className='ImageTorta' />
    </div>
  )
}

export default Home
