import React from 'react'
import { Contacto } from '../components/contacto'
import { Card, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import { Devs } from '../components/Devs';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export const QuienesSomos = () => {
  return (
    // <Container style={{ width: "500px", height: "600px" }}>
    <Container classname='d-flex justify-content-center'>
      <Card.Text>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Quienes Somos</Breadcrumb.Item>
        </Breadcrumb>
      </Card.Text>
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