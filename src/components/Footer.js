import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavLink from 'react-bootstrap/esm/NavLink';

export const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-light" data-bs-theme="dark">
      <Container>
        <Col md={12}>
          <h3>AQUI ESTAN LOS APUNTES DE TU CLASE</h3>
          <p>Todo muy ordenado. Con el plan de estudio oficial</p>
        </Col>
        <Row>
          {/* <Col md={4} className="mb-3 mt-4">
            <NavLink href='/' aria-label='Enlace a Inicio' style={{ fontSize: "30px", marginTop:"10%" }}>Web Apuntes</NavLink>
          </Col> */}
          <Col md={4} className="mb-3 mt-4">
            <h5 className='text-start'>¿Dudas?</h5>
            <ul className="list-group text-start">
              <li><NavLink href='/faqs' >Preguntas frecuentes</NavLink></li>
              <li><NavLink href='/faqs'>Añadir Comentario</NavLink></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3 mt-4">
            <h5 className='text-start'>Acceso Rápido</h5>
            <ul className="list-group text-start">
              <li><NavLink href='/ver_apuntes'>Ver Apuntes</NavLink></li>
              <li><NavLink href='/subir_apuntes'>Subir Apuntes</NavLink></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3 mt-4">
            <h5 className='text-start'>Información</h5>
            <ul className="list-group text-start">
              <li><NavLink href='/quienes_somos'>Quiénes Somos</NavLink></li>
              <li><NavLink href='/quienes_somos'>Contacto</NavLink></li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} ESTUAP. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
