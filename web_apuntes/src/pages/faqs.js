import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Buscador } from '../components/buscador';

export const Faqs = () => {
  return (
    <div id='itemsX'>
      <div id='BucadorInfo' >
        <Buscador/>
      </div>
      <Row xs={1} md={2} className="g-4">
      <Col>
        <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title> Gestor de apuntes</Card.Title>
            <Card.Text>
            Te enseño a visualizar, ordenar, subir y descargar todo el contenido dentro de tu perfil
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
      <Card>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title> Comunidad</Card.Title>
            <Card.Text>
            Descubre todo lo que la comunidad puede hacer por ti y cómo convertirte en el Top Wuoler de tu comunidad
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>

  );
}
