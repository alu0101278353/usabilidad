import React from 'react';
import { Button } from 'react-bootstrap';

const BotonEmail = () => {
  const emailAddress = 'alu0101242071@ull.edu.es';
  const subject = 'Solicitud Contacto ESTUAP';
  const body = 'Contenido del email';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Button variant="primary" onClick={handleEmailClick} className='mt-3'>
      Contáctanos
    </Button>
  );
};

export default BotonEmail;
