import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Carta } from './Carta'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'

export const GridApuntes = () => {
  const data1 = [
    {
      title: "Apuntes de Química",
      subject: "Química",
      description: "Estos apuntes te ayudarán con la química orgánica"
    },
    {
      title: "Apuntes de Física",
      subject: "Física",
      description: "Estos apuntes te ayudarán con las Leyes de Newton"
    },
    {
      title: "Apuntes de Biología",
      subject: "Biología",
      description: "Estos apuntes te ayudarán con la genética"
    }
  ]

  const data2 = [
    {
      title: "Apuntes de Informática",
      subject: "Informática",
      description: "Estos apuntes te ayudarán con JavaScript"
    },
    {
      title: "Apuntes de Matemáticas",
      subject: "Matemáticas",
      description: "Estos apuntes te ayudarán con las derivadas"
    },
    {
      title: "Apuntes de Música",
      subject: "Música",
      description: "Estos apuntes te ayudarán con los acordes"
    }
  ]

  const data3 = [
    {
      title: "Apuntes de Inglés",
      subject: "Inglés",
      description: "Estos apuntes te ayudarán con el verbo to be"
    },
    {
      title: "Apuntes de Lengua",
      subject: "Lengua y Literatura",
      description: "Estos apuntes te ayudarán con los comentarios de texto"
    },
    {
      title: "Apuntes de Historia",
      subject: "Historia de España",
      description: "Estos apuntes te ayudarán con la historia del Siglo XX"
    }
  ]

  return (
    <Container className='mt-5 mb-5'>
      <header>
        <Card border="light" className='shadow-none'>
          <Card.Body>
            <Card.Title style={{ fontSize: "30px"}} className='border-bottom pb-4 mb-4'>Todos los apuntes</Card.Title>
            <Card.Text>Aquí están <strong>todos</strong> los apuntes disponibles en <strong>ESTUAP</strong> encuentra los que necesites aquí.</Card.Text>
          </Card.Body>
        </Card>
      </header>
      <Row className='mt-3'>
        {data1.map((apunte) => (
          <Col><Carta data = {apunte}/></Col>
        ))}
      </Row>
      <Row>
        {data2.map((apunte) => (
          <Col><Carta data = {apunte}/></Col>
        ))}
      </Row>
      <Row>
        {data3.map((apunte) => (
          <Col><Carta data = {apunte}/></Col>
        ))}
      </Row>
    </Container>
  )
}