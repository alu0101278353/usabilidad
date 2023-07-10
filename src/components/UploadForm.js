import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import $ from 'jquery';

export const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const subjectRef = useRef(null);
  const fileRef = useRef(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (title.trim() === '') {
      $(titleRef.current).addClass('is-invalid');
      return;
    }

    if (description.trim() === '') {
      $(descriptionRef.current).addClass('is-invalid');
      return;
    }

    if (subject.trim() === '') {
      $(subjectRef.current).addClass('is-invalid');
      return;
    }

    if (!file) {
      $(fileRef.current).addClass('is-invalid');
      return;
    }

    // Resto de la lógica de subir archivo
    console.log('Título:', title);
    console.log('Descripción:', description);
    console.log('Archivo:', file);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Título</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Título de ejemplo"
          ref={titleRef}
        />
        <div className="invalid-feedback">¡Campo obligatorio!</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="subject">
        <Form.Label>Asignatura</Form.Label>
        <Form.Control
          type="text"
          value={subject}
          onChange={handleSubjectChange}
          placeholder="Asignatura de tus apuntes"
          ref={subjectRef}
        />
        <div className="invalid-feedback">¡Campo obligatorio!</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Descripción de tus apuntes"
          ref={descriptionRef}
        />
        <div className="invalid-feedback">¡Campo obligatorio!</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="file">
        <Form.Label>Archivo</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} ref={fileRef} />
        <div className="invalid-feedback">¡Selecciona un archivo!</div>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Subir Archivo
      </Button>
    </Form>
  );
};

