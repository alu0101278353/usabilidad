import React from 'react'
import { ImagenCarta } from './ImagenCarta'
import { Card, Tooltip, OverlayTrigger } from 'react-bootstrap'

export const Carta = ({ data }) => {
  return (
    <OverlayTrigger placement="bottom" overlay={<Tooltip>Disponibles en la página <strong>ver apuntes</strong></Tooltip>}>
      <Card className="carta">
        <ImagenCarta /> 
        <h2 style={{ fontSize: "28px" }}>{data.title}</h2>
        <p><b>Asignatura: </b>{data.subject}</p>
        <p><b>Descripción: </b>{data.description}</p>
      </Card>
    </OverlayTrigger>
  )
}