import React from 'react'
import { ImagenCarta } from './ImagenCarta'
import { Card } from 'react-bootstrap'

export const Carta = ({ data }) => {
  return (
    <Card className="card">
      <ImagenCarta /> {/*Pasar data.name al componente para importar la imagen de la fruta correspondiente*/}
      <h2>{data.title}</h2>
      <p><b>Asignatura: </b>{data.subject}</p>
      <p><b>Descripción: </b>{data.description}</p>
    </Card>
  )
}