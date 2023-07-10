import React from 'react'
import imagen from '../images/carta-logo.png'

export const ImagenCarta = () => {
  return (
    <img src={imagen} alt='Logo Apuntes' className='imagen-carta' aria-label='Imagen de guia'/>
  )
}