import './App.scss';
import Form from 'react-bootstrap/Form';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState} from 'react';

function App() {

  const [formulario, setFormulario] = useState({
    numero_1: '',
    numero_2: ''
  }); 
  const [resultados, setResultado] = useState({
    suma: 0, 
    resta: 0,
    multiplicacion: 0,
    division: 0,
  });
  const [validacion, setValidacion] = useState({
    
  })
  const handleChange = (event) => {
    const temporal = {...formulario} // copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
    const sumaTemp = parseFloat(temporal.numero_1) + parseFloat(temporal.numero_2)
    const restaTemp = parseFloat(temporal.numero_1) - parseFloat(temporal.numero_2)
    const multiplicacionTemp = parseFloat(temporal.numero_1) * parseFloat(temporal.numero_2)
    const divisionTemp = parseFloat(temporal.numero_1) / parseFloat(temporal.numero_2)
    console.log (temporal)
    console.log (sumaTemp)
    setResultado({
      suma: sumaTemp, 
      resta: restaTemp,
      multiplicacion: multiplicacionTemp,
      division: divisionTemp,
    })
    setValidacion({
      validoNumero1: validarNumero (temporal.numero_1),
      validoNumero2: validoNumero (temporal.numero_2),
      numero2Es0: validarNumero2Es0 (temporal.numero_2),
    })
    if (validarNumero(temporal.numero_1) && validarNumero(temporal.numero_2) && validarNumero2NoEs0(temporal.numero_2)) {
      setResultado({
        suma: sumaTemp,
        resta: restaTemp,
        multiplicacion: multiplicacionTemp,
        division: divisionTemp, 
      })
    }

    


  }; //el target.name es como los get y set, y el value.

  

  function validarNumero(num) {
    return !isNaN(num) // ! = no, isNaN es no un numero, no no es un numero, es un numero
  }

  function validarNumero2NoEs0(num) {
    return parseFloat(num) !== 0
  }
  const invalido1 = "El numero 1 es invalido"
  const invalido2 = "el numero 2 es invalido"
  const invalido2Es0 = "el numero 2 no puede ser 0"





  return (
    <div className="App">
      <Container>
        <Form>
        <Row>
          <Col>
          <Form.Label>Numero 1</Form.Label>
              <Form.Control 
              onChange={handleChange} 
               name = "numero_1" 
               type="input"
               placeholder = "Introducir numero 1"
               />
              
          <Form.Label>Numero 2</Form.Label>
              <Form.Control onChange={handleChange} 
              name = "numero_2" 
              type="input"
              placeholder = "Introducir numero 1"
              />
              <Form.Text className = "text-muted"> 
                { validacion.validarNumero2 ? "" : invalido2 }
              </Form.Text>   
              <Form.Text className = "text-muted"> 
                { validacion.validarNumero2 ? "" : invalido2 }
              </Form.Text>        
          
          </Col>
      
            <Col>
              <Form.Label>Resultado Suma</Form.Label>
              <Form.Control 
              onChange={handleChange} 
              value = {resultados.suma}
              type="+"
              disabled/>
            
              <Form.Label>Resultado Resta</Form.Label>
              <Form.Control 
              onChange={handleChange} 
              value = {resultados.resta}
              type="-"
              disabled/>
          
              <Form.Label>Resultado Multiplicacion</Form.Label>
              <Form.Control 
              onChange={handleChange} 
              value = {resultados.multiplicacion}
              type="/"
              disabled/>
              
              <Form.Label>Resultado Division</Form.Label>
              <Form.Control 
               onChange={handleChange} 
               value = {resultados.division} 
               type="*"
               disabled/>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
