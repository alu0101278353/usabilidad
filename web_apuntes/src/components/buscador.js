import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const Buscador =() => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
          placeholder="Apuntes..."
          aria-label="Buscador"
          aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="button-addon2">
        Button
      </Button>
    </InputGroup>
  );
}