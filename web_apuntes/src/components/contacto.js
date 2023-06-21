import Form from 'react-bootstrap/Form';
import React from 'react';

export const Contacto = () => {
  return (
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" placeholder="carla@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Dinos lo que necesitas</Form.Label>
              <Form.Control as="textarea" rows={3} />
          </Form.Group>
      </Form>
  )
    
}
