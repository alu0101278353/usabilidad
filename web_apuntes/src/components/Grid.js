import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Carta } from '../components/Carta'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-bootstrap'

export const Grid = () => {
  const data1 = {
    title: "Apuntes de Química",
    subject: "Química",
    description: "Estos apuntes te ayudarán con la química orgánica"
  }
  const data2 = {
    title: "Apuntes de Física",
    subject: "Química",
    description: "Estos apuntes te ayudarán con las Leyes de Newton"
  }
  const data3 = {
    title: "Apuntes de Biología",
    subject: "Química",
    description: "Estos apuntes te ayudarán con la genética"
  }
  return (
    <Container className='mt-5 mb-5'>
      <Row>
        <Col></Col>
        <Col>
          <Card border="light" className='shadow-none'>
            <Card.Body>
              <Card.Title style={{ fontSize: "30px"}} className='border-bottom pb-4 mb-4'>Tus Apuntes</Card.Title>
              <Card.Text>En esta página podrás compartir tus apuntes y ver los de otras personas sobre diferentes materias.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <h3 className='border-bottom pb-3 mb-3'>Apuntes más populares</h3>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col><NavLink  href='/ver_apuntes'><Carta data = {data1}/></NavLink></Col>
        <Col><NavLink  href='/ver_apuntes'><Carta data = {data2}/></NavLink></Col>
        <Col><NavLink  href='/ver_apuntes'><Carta data = {data3}/></NavLink></Col>
      </Row>
    </Container>
  )
}
