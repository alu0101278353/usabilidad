import React from 'react'
import { Buscador } from '../components/buscador';
import { GridFaqs } from '../components/GridFaqs';
import { Card } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/esm/Container'

export const Faqs = () => {
  return (
    <div id='itemsX'>
      <Card.Text>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Preguntas frecuentes</Breadcrumb.Item>
        </Breadcrumb>
      </Card.Text>
      <header>
        <Card border="light" className='shadow-none'>
          <Card.Body>
            <Card.Title style={{ fontSize: "35px"}} className='border-bottom pb-4 mb-4'>¿Cómo podemos ayudarte?</Card.Title>
          </Card.Body>
        </Card>
      </header>
      <Container classname='d-flex justify-content-center'>
        <Buscador/>
      </Container>
      <GridFaqs/>
    </div>

  );
}
