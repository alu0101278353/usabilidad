import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

export const MenuNav = () => {
  return (
    <Navbar expand="lg" className='bg-body-tertiary py-4' data-bs-theme="dark">
      <Container style={{marginLeft: "1%", marginRight: "1%"}}>
        <Navbar.Brand href='/' aria-label='Nombre de la app'> ESTUAP </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='me-auto' style={{ textTransform: "capitalize", whiteSpace: "nowrap" }}>
            <Nav.Link href='/' aria-label='Inicio' className='menu-link'>Inicio</Nav.Link>
            <Nav.Link href='/ver_apuntes' aria-label='Ver Apuntes' className='menu-link'>Ver Apuntes</Nav.Link>
            <Nav.Link href='/subir_apuntes' aria-label='Subir Apuntes' className='menu-link'>Subir Apuntes</Nav.Link>
            {/* <NavDropdown title="Opciones" id="basic-nav-dropdown" className='dropdown ml-auto'>
              <NavDropdown.Item href="/">Vuelta al home</NavDropdown.Item>
              <NavDropdown.Item href="#QuienesSomos" aria-label='Quienes somos'>Quiénes Somos</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href='/quienes_somos' aria-label='Quienes somos' className='menu-link'>Quienes Somos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

