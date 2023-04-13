import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react';

function App() {

  const [formulario, setFormulario] = useState({
    numero_1: '',
    numero_2: ''
  }); 
  

  const handleChange = (event) => {
    const temporal = {...formulario} // copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }
  return (
    <div className="App">
      <Container>
        <Form>
        <Row>
          <Col>
          <Form.Label>Numero 1</Form.Label>
              <Form.Control onChange={handleChange} name="Numero 1" type="input"/>
          <Form.Label>Numero 2</Form.Label>
              <Form.Control onChange={handleChange} name="Numero 2" type="input"/>
          </Col>
      
            <Col>
              <Form.Label>Suma</Form.Label>
              <Form.Control onChange={handleChange} name="Suma" type="+"/>
            
              <Form.Label>Resta</Form.Label>
              <Form.Control onChange={handleChange} name="Resta" type="-"/>
          
              <Form.Label>Multiplicacion</Form.Label>
              <Form.Control onChange={handleChange} name="Multiplicacion" type="/"/>
              
              <Form.Label>Division</Form.Label>
              <Form.Control onChange={handleChange} name="Division" type="*"/>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
