import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Carta } from './Carta'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import { NavLink, Tooltip, OverlayTrigger } from 'react-bootstrap'

export const GridHome = () => {
  const data1 = {
    title: "Apuntes de Química",
    subject: "Química",
    description: "Estos apuntes te ayudarán con la química orgánica"
  }
  const data2 = {
    title: "Apuntes de Física",
    subject: "Física",
    description: "Estos apuntes te ayudarán con las Leyes de Newton"
  }
  const data3 = {
    title: "Apuntes de Biología",
    subject: "Biología",
    description: "Estos apuntes te ayudarán con la genética"
  }
  return (
    <Container className='mt-5 mb-5'>
      <Row className='mb-3'>
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
        <Col>
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Disponibles en la página <strong>ver apuntes</strong></Tooltip>}>
            <NavLink  href='/ver_apuntes'><Carta data = {data1}/></NavLink>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Disponibles en la página <strong>ver apuntes</strong></Tooltip>}>
            <NavLink  href='/ver_apuntes'><Carta data = {data2}/></NavLink>
          </OverlayTrigger>
        </Col>
        <Col>
          <OverlayTrigger placement="bottom" overlay={<Tooltip>Disponibles en la página <strong>ver apuntes</strong></Tooltip>}>
            <NavLink  href='/ver_apuntes'><Carta data = {data3}/></NavLink>
          </OverlayTrigger>
        </Col>
      </Row>
    </Container>
  )
}
