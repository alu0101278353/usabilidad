import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { UploadForm } from '../components/UploadForm'
import { Card } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const SubirApuntes = () => {
  return (
  <main>
    <Card.Text>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>Subir Apuntes</Breadcrumb.Item>
      </Breadcrumb>
    </Card.Text>
    <header style={{ width: "80%", marginLeft: "10%" }}>
        <Card border="light" className='shadow-none'>
          <Card.Body>
            <Card.Title style={{ fontSize: "30px"}} className='border-bottom pb-4 mb-4'>Sube tus apuntes</Card.Title>
            <Card.Text>Aquí puedes subir tus apuntes para poder compartirlos.</Card.Text>
          </Card.Body>
        </Card>
    </header>
    <Container style={{ width: "30%", marginLeft: "35%" }} className='mb-5 mt-3'>
      <Card>
        <Card.Body>
          <UploadForm/>
        </Card.Body>
      </Card>
    </Container>
  </main>
  )
}
