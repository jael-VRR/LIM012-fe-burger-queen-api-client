import React from 'react';
import { useState } from 'react';
import { Jumbotron, Row, Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchingBar from '../components/navbar';
import '../style/projects.css';
import datalove from '../images/datalove.png';
import red from '../images/red.png';
import burger from '../images/burger.png';
import homar from '../images/homar.png';
import yanbal from '../images/yanbal.png';
import tgp from '../images/tgp.png';
import ParticlesWrapper from '../components/particles';




const Projects = () => {

  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);
  const [index5, setIndex5] = useState(0);



  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  const handleSelect1 = (selectedIndex1, e) => {
    setIndex1(selectedIndex1);
  };
  const handleSelect2 = (selectedIndex2, e) => {
    setIndex2(selectedIndex2);
  };
  const handleSelect3 = (selectedIndex3, e) => {
    setIndex3(selectedIndex3);
  };
  const handleSelect4 = (selectedIndex4, e) => {
    setIndex4(selectedIndex4);
  };
  const handleSelect5 = (selectedIndex5, e) => {
    setIndex5(selectedIndex5);
  };




  return (
    <div className="wrapper">
      <ParticlesWrapper />
      <SearchingBar />
      <Row className="row  justify-content-center align-items-center vh-100 mr-5">
        <Jumbotron>
          <Carousel >
            <Carousel.Item>
              <div className="card mb-3" >
                <div className="row no-gutters">
                  <div className="col-md-6">

                    <img activeIndex={index} onSelect={handleSelect} style={{ with: "320px" }}
                      className="d-block w-100"
                      src={datalove}
                      alt="First slide"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="title-icons">
                        <h5 className="card-title mr-4">Data lovers</h5>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </Carousel.Item>
            <Carousel.Item>
              <div className="card mb-3" >
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img activeIndex={index1} onSelect={handleSelect1}
                      className="d-block w-100"
                      src={red}
                      alt="Second slide"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="title-icons">
                        <h5 className="card-title mr-4">Red social</h5>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>




            </Carousel.Item>
            <Carousel.Item >

              <div className="card mb-3" >
                <div className="row no-gutters">
                  <div className="col-md-6">

                    <img activeIndex={index2} onSelect={handleSelect2}
                      className="d-block w-100"
                      src={burger}
                      alt="Third slide"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="title-icons">
                        <h5 className="card-title mr-4">Burger Queen</h5>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </Carousel.Item>

            <Carousel.Item >
              <div className="card mb-3" >
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img activeIndex={index3} onSelect={handleSelect3}
                      className="d-block w-100"
                      src={homar}
                      alt="Third slide"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="title-icons">
                        <h5 className="card-title mr-4">Seguros Homar</h5>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </Carousel.Item>
            <Carousel.Item >
              <div className="card mb-3" >
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img activeIndex={index4} onSelect={handleSelect4}
                      className="d-block w-100"
                      src={yanbal}
                      alt="Third slide"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="title-icons">
                        <h5 className="card-title mr-4">YAnbal</h5>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </Carousel.Item>
            <Carousel.Item >
              <div className="card mb-3" >
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img activeIndex={index5} onSelect={handleSelect5}
                      className="d-block w-100"
                      src={tgp}
                      alt="Third slide"
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className="title-icons">
                        <h5 className="card-title mr-4">tgp</h5>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </Carousel.Item>
          </Carousel>
        </Jumbotron>
      </Row>
    </div >

  )
}

export default Projects;