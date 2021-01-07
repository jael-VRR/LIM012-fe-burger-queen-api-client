import React from 'react';
import { Jumbotron, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchingBar from '../components/navbar';
import '../style/projects.css';
import datalove2 from '../images/datalove2.png';
import red from '../images/red.png';
import burger2 from '../images/burger2.png';
import homar from '../images/homar.png';
import yanbal from '../images/yanbal.png';
import tgp1 from '../images/tgp1.png';
import ParticlesWrapper from '../components/particles';




const Projects = () => {


  return (
    <div className="wrapper">
      <ParticlesWrapper />
      <SearchingBar />
      <Jumbotron>
        <Carousel>
          <Carousel.Item>
          <h3 className="text">Datalovers<span><a href=""></a></span><span><a href=""></a></span>
          <span><a className="link" href="https://jael-vrr.github.io/LIM012-data-lovers/src/index.html">Demo</a></span>
          <span><a className="link" href="https://github.com/jael-VRR/LIM012-data-lovers">Repositorio</a></span>
          </h3>
         
            <img
              className="d-block w-100 img-fluid"
              src={datalove2}
              alt="First slide"
            />
            <Carousel.Caption>
          
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <h3 className="text">Red Social<span><a href="#"></a></span><span><a href="#"></a></span>
          <span><a className="link"  href="https://jael-vrr.github.io/LIM012-data-lovers/src/index.html">Demo</a></span>
          <span><a className="link"  href="https://github.com/jael-VRR/LIM012-data-lovers">Repositorio</a></span>
          </h3>
            <img
              className="d-block w-100 img-fluid"
              src={red}
              alt="Third slide"
            />

            <Carousel.Caption>
       
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <h3 className="text">Burger Queen<span><a href=""></a></span><span><a href=""></a></span>
          <span><a className="link" href="https://burger-queen-luja.herokuapp.com/">Demo</a></span>
          <span><a className="link" href="https://github.com/jael-VRR/LIM012-fe-burger-queen">Repositorio</a></span>
          </h3>
            <img
              className="d-block w-100 img-fluid"
              src={burger2}
              alt="Third slide"
            />

            <Carousel.Caption>
          
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <h3 className="text">Homar<span><a href=""></a></span><span><a href=""></a></span>
          <span><a className="link" href="">Demo</a></span>
          <span><a className="link" href="https://github.com/jael-VRR/Homar/tree/jael">Repositorio</a></span>
          </h3>
            <img
              className="d-block w-100 img-fluid"
              src={homar}
              alt="Third slide"
            />

            <Carousel.Caption>
         
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <h3 className="text">Maya-clientes<span><a href=""></a></span><span><a href=""></a></span>
          <span><a className="link" href="https://github.com/jael-VRR/mayaclientes-yanbal/tree/jael">Demo</a></span>
          <span><a className="link" href="https://sumaqkuyay.github.io/mayaclientes-yanbal/#/">Repositorio</a></span>
          </h3>
            <img
              className="d-block w-100 img-fluid"
              src={yanbal}
              alt="Third slide"
            />

            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <h3 className="text">Reducer<span><a href="#"></a></span><span><i></i></span>
          <span><a className="link" href="https://tgp-legal.web.app/">Demo</a></span>
          <span><a className="link" href="">Repositorio</a></span>
          </h3>
            <img
              className="d-block w-100 img-fluid"
              src={tgp1}
              alt="Third slide"
            />

            <Carousel.Caption>
           
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </Jumbotron>
    </div >

  )
}

export default Projects;