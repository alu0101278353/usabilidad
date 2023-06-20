import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { UploadForm } from '../components/UploadForm'
import { Card } from 'react-bootstrap'

export const SubirApuntes = () => {
  return (
    <Container style={{ width: "500px", height: "600px" }}>
      <Card style={{ height: "400px", marginTop: "100px", marginBottom: "100px" }}>
        <Card.Body>
          <UploadForm/>
        </Card.Body>
      </Card>
    </Container>
  )
}
