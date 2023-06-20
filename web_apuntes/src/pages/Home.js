import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import { Carrusel } from '../components/Carrusel'

export const Home = () => {
  return (
  <div>
    <Carrusel aria-label="Carrusel de apuntes"/>
    <Container>
      <Card className='mt-5 mb-5'>
        <Card.Body>
          <Card.Title style={{ fontSize: "30px"}}>Web Apuntes</Card.Title>
          <Card.Text>En esta página podrás compartir tus apuntes y ver los de otras personas sobre diferentes materias.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  </div>
  )
}
