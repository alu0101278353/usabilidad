import React, { useRef } from 'react';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import $ from 'jquery';

export const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  let validityCheck = true;

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación de campos
    const email = emailRef.current.value;
    const emailRegex = /\S+@\S+\.\S+/;
    const password = passwordRef.current.value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (email === '' && !emailRegex.test(email)) {
      $(emailRef.current).addClass('is-invalid');
      validityCheck = false;
      return;
    }else {
      $(emailRef.current).removeClass('is-invalid');
      validityCheck = true;
    }

    if (password === '' && !passwordRegex.test(password)) {
      $(passwordRef.current).addClass('is-invalid');
      validityCheck = false;
      return;
    }else{
      $(passwordRef.current).removeClass('is-invalid');
      validityCheck = true;
    }

    // Resto de la lógica de inicio de sesión
    console.log('Email:', email);
    console.log('Contraseña:', password);

  };

  const handleClick = () => {
    if (validityCheck) {
      return <Navigate to='/' />;
    }
  }

  const renderPasswordTooltip = (props) => (
    <Tooltip id="password-tooltip" {...props}>
      La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un carácter especial.
    </Tooltip>
  );
  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu email"
          ref={emailRef}
        />
        <div className="invalid-feedback">Ingresa un email válido.</div>
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <OverlayTrigger placement="right" overlay={renderPasswordTooltip}>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            ref={passwordRef}
          />
        </OverlayTrigger>
        <div className="invalid-feedback">
          La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un carácter especial.
        </div>
      </Form.Group>

      <Button variant="primary" type="submit" className='mt-3' onClick={ handleClick }>
        Iniciar Sesión
      </Button>
    </Form>
  )
}
