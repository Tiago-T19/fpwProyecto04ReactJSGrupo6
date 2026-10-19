import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/SaintsRow.css';
import srLogo from '../assets/SR logo.png';

export class DadoSuerte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      edad: '',
      jugadorRegistrado: null,
      valorDado: 1
    };

    this.emojisDados = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleGuardarJugador = (e) => {
    e.preventDefault();
    const { nombre, apellido, edad } = this.state;
    if (nombre && apellido && edad) {
      this.setState({
        jugadorRegistrado: { nombre, apellido, edad }
      });
    }
  };

  lanzarDado = () => {
    const nuevoValor = Math.floor(Math.random() * 6) + 1;
    this.setState({ valorDado: nuevoValor });
  };

  obtenerMensaje = (valor) => {
    if (valor === 1) return "Mala suerte, sacaste 1";
    if (valor >= 2 && valor <= 5) return "Buen tiro!";
    if (valor === 6) return "¡FELICIDADES! ¡Sacaste el mayor!";
    return "";
  };

  render() {
    const { nombre, apellido, edad, jugadorRegistrado, valorDado } = this.state;

    return (
      <Container className="sr-container my-5">
        <div className="text-center mb-4 d-flex align-items-center justify-content-center gap-2">
          <img 
            src={srLogo} 
            alt="Saints Row Logo" 
            style={{ width: '45px', height: '45px', objectFit: 'contain' }} 
          />
          <h2 className="sr-title m-0">Dado de la Suerte</h2>
          <img 
            src={srLogo} 
            alt="Saints Row Logo" 
            style={{ width: '45px', height: '45px', objectFit: 'contain' }} 
          />
        </div>

        {!jugadorRegistrado ? (
          <Form onSubmit={this.handleGuardarJugador}>
            <h4 className="text-center mb-3" style={{ color: '#d17bff' }}>REGISTRO DE JUGADOR</h4>
            
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nombre}
                onChange={this.handleInputChange}
                required
                className="sr-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={apellido}
                onChange={this.handleInputChange}
                required
                className="sr-input"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                name="edad"
                placeholder="Edad"
                value={edad}
                onChange={this.handleInputChange}
                required
                className="sr-input"
              />
            </Form.Group>

            <Button type="submit" className="sr-btn w-100 mt-2">
              Registrar Jugador
            </Button>
          </Form>
        ) : (
          <div className="text-center">
            <div className="sr-jugador-info mb-3">
              <p className="mb-1"><strong>Jugador:</strong> {jugadorRegistrado.nombre} {jugadorRegistrado.apellido}</p>
              <p className="mb-0"><strong>Edad:</strong> {jugadorRegistrado.edad} años</p>
            </div>

            <div className="sr-display">
              {this.emojisDados[valorDado - 1]}
            </div>

            <p className="sr-subtexto">Te tocó: {valorDado}</p>
            <p className="sr-mensaje">{this.obtenerMensaje(valorDado)}</p>

            <Button onClick={this.lanzarDado} className="sr-btn px-4 py-2 mt-2">
              Lanzar Dado
            </Button>
          </div>
        )}
      </Container>
    );
  }
}