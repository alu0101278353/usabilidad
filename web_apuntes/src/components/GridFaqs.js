import React from 'react'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import { CartaFaqs } from './CartaFaqs'
import Container from 'react-bootstrap/esm/Container'
// import Card from 'react-bootstrap/Card'
import { NavLink} from 'react-bootstrap'

export const GridFaqs = () => {
  const data1 = {
    title: "Gestor de apuntes",
    description: "Te enseño a visualizar, ordenar, subir y descargar todo el contenido dentro de tu perfil"
  }
  const data2 = {
    title: "Comunidad",
    description: "Descubre todo lo que la comunidad puede hacer por ti y cómo convertirte en el Top Wuoler de tu comunidad"
  }
  const data3 = {
    title: "Actualizaciones nuevas",
    description: "En ESTUAP estamos constantemente currando para mejorar... ¡Ponte al día de todas las actualizaciones y novedades!"
  }
   const data4 = {
    title: "Nuevo Ticket",
    description: "¿No hemos podido ayudarte en los artículos anteriores? Haz clic para abrir una incidencia y te pondremos en contacto con alguno de nuestros agentes"
  }

  return (
    <Container style={{ width: "850px", height: "420px" }}>
      <Row className='mt-3'>
          <NavLink  href='/info_comunidad'><CartaFaqs data = {data1}/></NavLink>
      </Row>
      <Row className='mt-3'>
          <NavLink  href='/gestor_apuntes'><CartaFaqs data = {data2}/></NavLink>
      </Row>
      <Row className='mt-3'>
          <NavLink  href='/nuevo_ticket'><CartaFaqs data = {data3}/></NavLink>
      </Row>
      <Row className='mt-3'>
          <NavLink  href='/actualizaciones'><CartaFaqs data = {data4}/></NavLink>
      </Row>
    </Container>
  )
}
