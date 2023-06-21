import React from 'react'
import { ImagenCarta } from './ImagenCarta'
import { Card } from 'react-bootstrap'

export const Carta = ({ data }) => {
  return (
      <Card className="carta">
        <ImagenCarta /> 
        <h2 style={{ fontSize: "29px" }}>{data.title}</h2>
        <p><b>Asignatura: </b>{data.subject}</p>
        <p><b>Descripción: </b>{data.description}</p>
      </Card>
  )
}