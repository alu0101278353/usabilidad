import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <img className='d-block w-100' src='https://picsum.photos/id/0/5000/700' alt='Apuntes fisica'/>
        <Carousel.Caption>
          <h3>Física</h3>
          <p>Estos son unos apuntes de física muy interesantes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src='https://picsum.photos/id/40/5000/700' alt='Apuntes fisica'/>
        <Carousel.Caption>
          <h3>Animales</h3>
          <p>Estos son unos apuntes de animales muy completos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src='https://picsum.photos/id/15/5000/700' alt='Apuntes fisica'/>
        <Carousel.Caption>
          <h3>Cambio Climático</h3>
          <p>Estos son unos apuntes del cambio climático y su impacto en el mundo</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
