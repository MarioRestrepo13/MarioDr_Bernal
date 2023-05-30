import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {hacerPeticion} from './servicios/clienteaxios.js';


function App() {
  const [formulario, setFormulario] = useState({
    genero: '',
    artista: '',
    cancion: '',
  });

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const guardarInfo= () => {
    hacerPeticion(formulario)
  }

  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Text >Formulario con react-django</Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>genero</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="genero"
                placeholder="Ingrese el genero de la cancion"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>artista</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="artista"
                placeholder="Ingrese el artista de la cancion"
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>cancion</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="cancion"
                placeholder="ingrese el nombre de la cancion"
                  
              />
            </Form.Group>
            {formulario.Genero}
            {formulario.Artista}
            {formulario.Cancion}


            
            <Button onClick={guardarInfo}>
              Guardar info
            </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
