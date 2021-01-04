
import React from 'react'
import { Row, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchingBar from '../components/navbar';
import images from '../images/tecnología-y-creación.png';
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
            className="align-self-end mr-5"
            src={preview}
            alt="Generic placeholder"
          />
          <Media.Body className='intro'>
            <h4 className="text">Hola!</h4>
            <h1 className="mb-0">
              I'am Jael Rodríguez
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