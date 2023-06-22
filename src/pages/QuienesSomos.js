import React from 'react'
import { Contacto } from '../components/contacto'
import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import { Devs } from '../components/Devs';


export const QuienesSomos = () => {
  return (
    // <div>C O N T A C T A N O S</div>
    // <Container style={{ width: "500px", height: "600px" }}>
    <Container classname='d-flex justify-content-center'>
      <Devs/>
      <Row>
        <Col></Col>
        <Col>
        <Card style={{ width: "600px", marginTop: "100px", marginBottom: "100px" }}>
          <Card.Body>
            <p> C O N T A C T A N O S</p>
            <Contacto/>
          </Card.Body>
        </Card>
        </Col>
        <Col></Col>
      </Row>

    </Container>
  )
}