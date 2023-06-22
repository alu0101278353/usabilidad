import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <img className='d-block w-100' src='https://img.freepik.com/foto-gratis/cristaleria-laboratorio-fondo-azul_23-2149731493.jpg?w=1800&t=st=1687305613~exp=1687306213~hmac=532eed17e9ee0feb51279af6c0edc0f124a502e22b001843e5fc01f02f24e740' height={420}alt='Apuntes fisica'/>
        <Carousel.Caption>
          <h3>¿APUNTES DE QUÍMICA?</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src='https://img.freepik.com/foto-gratis/vista-superior-utiles-escolares-fondo-pizarra_73683-2215.jpg?w=1800&t=st=1687306104~exp=1687306704~hmac=68e75ddec99a3a7724612c3d9d126f99f246a1f3392a7e89d3cbc356478ed600' height={420} alt='Apuntes fisica'/>
        <Carousel.Caption>
          <h3>APUNTA PARA RECORDAR</h3>
          <p>Recuerda que retienes mejor cuando apuntas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src='https://img.freepik.com/vector-gratis/bolas-colision-sobre-fondo-blanco_1308-111926.jpg?w=1800&t=st=1687306318~exp=1687306918~hmac=ad1e9c54d732f5a2519184c105264be0902cd8c21d86cb7d4d56b2da1f9769cb' height={420} alt='Apuntes fisica'/>
        <Carousel.Caption>
          <h3>¿APUNTES DE FÍSICA?</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
