import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);

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
    // Logica de subir archivo
    console.log('Título:', title);
    console.log('Descripción:', description);
    console.log('Archivo:', file);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Título</Form.Label>
        <Form.Control type="text" value={title} onChange={handleTitleChange} placeholder='Título de ejemplo'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="subject">
        <Form.Label>Asignatura</Form.Label>
        <Form.Control type="text" value={subject} onChange={handleSubjectChange} placeholder='Asignatura de tus apuntes' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={handleDescriptionChange} placeholder='Descripción de tus apuntes' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="file">
        <Form.Label>Archivo</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" type="submit" className='mt-2'>
        Subir Archivo
      </Button>
    </Form>
  );
};
