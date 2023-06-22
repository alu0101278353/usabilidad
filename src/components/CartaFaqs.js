import React from 'react'
import { ImagenCartaFaqs} from './ImagenCartaFaqs'
import { Card } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'

export const CartaFaqs = ({ data }) => {
  return (
      <Card className="cartaFaqs" style={{ width: '55rem'}}>
        <Container style={{width: '10rem'}}>
          <ImagenCartaFaqs /> 
        </Container>
        <h2 style={{ fontSize: "25px" }}>{data.title}</h2>
        <p>{data.description}</p>
      </Card>
  )
}