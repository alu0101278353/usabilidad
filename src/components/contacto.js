import React, { useRef } from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import $ from 'jquery';
import BotonEmail from './BotonEmail';

export const Contacto = () => {
  const emailRef = useRef(null);

  const handleEmailBlur = () => {
    const email = emailRef.current.value;
    const emailRegex = /\S+@\S+\.\S+/; // Expresión regular para verificar el email

    if (email !== '' && !emailRegex.test(email)) {
      $(emailRef.current).addClass('is-invalid');
    } else {
      $(emailRef.current).removeClass('is-invalid');
    }
  };

  const renderTooltip = (props) => (
    <Tooltip id="email-tooltip" {...props}>
      Asegúrate de que el Email tenga el arroba (@) y el dominio escritos correctamente.
    </Tooltip>
  );

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>E-mail</Form.Label>
        <OverlayTrigger placement="right" overlay={renderTooltip}>
          <Form.Control
            type="email"
            placeholder="carla@gmail.com"
            ref={emailRef}
            onBlur={handleEmailBlur}
          />
        </OverlayTrigger>
        <div className="invalid-feedback">Ingresa un email válido.</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Dinos lo que necesitas</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <BotonEmail />
    </Form>
  );
};

