import React from 'react'
import { GridApuntes } from '../components/GridApuntes'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Card } from 'react-bootstrap';

export const VerApuntes = () => {
  return (
    <main>
      <Card.Text>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item active>Ver Apuntes</Breadcrumb.Item>
        </Breadcrumb>
      </Card.Text>
    <GridApuntes/>
    </main>
  
  )
}
