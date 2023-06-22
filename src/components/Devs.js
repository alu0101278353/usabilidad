import React from 'react'
import { Row, Col, Image, Card } from 'react-bootstrap'
import adahi from '../images/adahi.jpeg'
import carla from '../images/carla.jpeg'
import carlos from '../images/carlos.jpeg'

export const Devs = () => {
  return (
  <main>
    <header style={{ width: "80%", marginLeft: "10%" }}>
        <Card border="light" className='shadow-none mt-3'>
          <Card.Body>
            <Card.Title style={{ fontSize: "30px"}} className='border-bottom pb-4 mb-4'>Nuestro Equipo</Card.Title>
            <Card.Text>No dudes en contactar con nosotros para lo que necesites.</Card.Text>
          </Card.Body>
        </Card>
    </header>
    <Row className='mt-5'>
      <Col>
        <Image src={adahi} className='imagen-devs mb-3' roundedCircle/>
        <h4 className='mt-2 border-bottom pb-3'>Adahi Oval Afonso</h4>
        <p><a href={'mailto:alu0101242071@ull.edu.es'} style={{ color: "black", textDecoration: "none" }}>alu0101242071@ull.edu.es</a></p>
      </Col>
      <Col>
        <Image src={carla} className='imagen-devs mb-3' roundedCircle/>
        <h4 className='mt-2 border-bottom pb-3'>Carla Fernanda Flores Gonzales</h4>
        <p><a href={'mailto:alu0101242071@ull.edu.es'} style={{ color: "black", textDecoration: "none" }}>alu0101278353@ull.edu.es</a></p>
      </Col>
      <Col>
        <Image src={carlos} className='imagen-devs mb-3' roundedCircle/>
        <h4 className='mt-2 border-bottom pb-3'>Carlos Ravina Morales</h4>
        <p><a href={'mailto:alu0101242071@ull.edu.es'} style={{ color: "black", textDecoration: "none" }}>alu0101424170@ull.edu.es</a></p>
      </Col>
    </Row>
  </main>
  )
}
