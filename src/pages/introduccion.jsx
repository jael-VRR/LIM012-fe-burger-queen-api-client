
import React from 'react'
import { Row, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchingBar from '../components/navbar';
import preview from '../images/preview.png';
import '../style/style.css';
import '../style/introduccion.css';
import ParticlesWrapper from '../components/particles';




const Introduccion = () => {



  return (
    <div className="wrapper">
       <ParticlesWrapper/> 
      <SearchingBar />
      <Row className="row  justify-content-center align-items-center vh-100 ">
       <div className="contenido-descripcion">
        <Media>
          <img 
            className="align-self-end mr-5 img-fluid"
            src={preview}
            alt="Generic placeholder"
          />
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
        </Media>
        </div>
      </Row>
    </div>
  );
}

export default Introduccion;