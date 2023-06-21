import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {guardarGenero, traerGenero, traerTodosGenero, traerTodosGeneroYArtista} from './servicios/clienteaxios.js';
import {Col, Row} from 'react-bootstrap';


function App() {
  const [formulario, setFormulario] = useState({
    genero: '',
    artista: '',
    cancion: '',
  });
  const [genero, setGenero] = useState({
    genero: '',

  });
  const [artista, setArtista] = useState({
    artista: '',

  });


  const [informacion, setInformacion] = useState([
    {
      'titulo': '...'
    }, 
    {  
      'titulo': '...'
    }
  ])
  
  
  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
    
  }; 
  const handleChangeBuscarGenero = (event) => {
    const temporal = { ...genero };
    temporal[event.target.name] = event.target.value;
    setGenero(temporal);
    
  };
  const handleChangeBuscarArtista = (event) => {
    const temporal = { ...artista };
    temporal[event.target.name] = event.target.value;
    setArtista(temporal);
    
  };

  const guardar= async () => {
    await guardarGenero(formulario)
    traer()
  }
  
  const traer = async () => {
    const temporal = await traerGenero()
    setInformacion (temporal)
  }
  const traerGenero2 = async () => {
    const temporal = await traerTodosGenero(genero.genero)
    setInformacion (temporal)
  }
  const traerArtista = async () => {
    const temporal = await traerTodosGeneroYArtista(genero.genero, artista.artista)
    setInformacion (temporal)
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
            <Button onClick={guardar}>
              Guardar info
            </Button>
        </Form>
        {
          informacion.map((elemento) => {
            return <Row>          
              <Col>
                {elemento.genero}
              </Col>
              <Col>
                {elemento.artista}
              </Col>
              <Col>
                {elemento.cancion}
              </Col>
            </Row>
          })
        }
        <Button onClick={traer}>
          traer todos
        </Button>
        <Form>
        <Form.Group className="mb-3">
              <Form.Label>genero</Form.Label>
              <Form.Control
                onChange={handleChangeBuscarGenero}
                name="genero"
                placeholder="Ingrese el genero de la cancion"/>
        </Form.Group>
        </Form>
        <Button onClick={traerGenero2}>
              buscar guardado
        </Button>

        <Form>
        <Form.Group className="mb-3">
              <Form.Label>artista</Form.Label>
              <Form.Control
                onChange={handleChangeBuscarArtista}
                name="artista"
                placeholder="Ingrese el artista de la cancion"/>
        </Form.Group>
        </Form>
        <Button onClick={traerArtista}>
              buscar guardado y artista
        </Button>

      </Container>
    </div>
  );
}

export default App;
