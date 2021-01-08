
import React from 'react'
import { Jumbotron, Col, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchingBar from '../components/navbar';
import preview from '../images/preview.png';
import '../style/style.css';
import '../style/introduccion.css';
import ParticlesWrapper from '../components/particles';




const Introduccion = () => {

  return (
    <div className="wrapper">
      <ParticlesWrapper />
      <SearchingBar />
      <Jumbotron >
        <div className="card-deck" >
          <div className="card text-center">
            <Col s={6} className="card-body">
          <img 
            className="img-fluid"
            src={preview}
            fluid
            alt="Generic placeholder"
          />
            </Col>
          </div>
          <div className="card text-center1" >
            <Col s={6} className="card-body">
            <Media.Body className='intro'>
            <div className="word">
              <span >H</span>
              <span >o</span>
              <span >l</span>
              <span >a</span>
              <span >!</span>
            </div>
            <h1 className="text-name">
              Soy   Jael   Rodríguez
            </h1>
            <br/>
            <h4 className="text">-Frontend Developer-</h4>
          </Media.Body>
            </Col>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Introduccion;