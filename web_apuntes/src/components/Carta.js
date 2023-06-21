import React from 'react'
import { ImagenCarta } from './ImagenCarta'

export const Carta = () => {
  const data = {
    title: "Apuntes de Química",
    subject: "Química",
    description: "Estos apuntes te ayudarán con la química orgánica"
  }

  return (
    <div className="card">
      <ImagenCarta /> {/*Pasar data.name al componente para importar la imagen de la fruta correspondiente*/}
      <h2>{data.title}</h2>
      <p><b>Asignatura: </b>{data.subject}</p>
      <p><b>Descripción: </b>{data.description}</p>
    </div>
  )
}