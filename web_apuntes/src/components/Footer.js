import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-light" data-bs-theme="dark">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>Columna 1</h5>
            <ul className="list-unstyled">
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Columna 2</h5>
            <ul className="list-unstyled">
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Columna 3</h5>
            <ul className="list-unstyled">
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
            </ul>
          </Col>
        </Row>
        <hr className="bg-light" />
        <Row>
          <Col>
            <p className="text-center">
              &copy; {new Date().getFullYear()} Web Apuntes. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
