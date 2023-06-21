import React from 'react'
import { Contacto } from '../components/contacto'
import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/Image';


export const QuienesSomos = () => {
  return (
    // <div>C O N T A C T A N O S</div>
    // <Container style={{ width: "500px", height: "600px" }}>
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src= '../images/ESTUAP.svg'/>
        </Col>
      </Row>
      <Card style={{ height: "400px", marginTop: "100px", marginBottom: "100px" }}>
      <Card.Body>
          <p> C O N T A C T A N O S</p>
        <Contacto/>
      </Card.Body>
      </Card>
    </Container>
  )
}