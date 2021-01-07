
import React, { useState, useEffect } from "react"
import { Jumbotron, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/aboutMe.css';
import SearchingBar from '../components/navbar';
import Btn from '../components/buttoncv.jsx';
import boot from '../images/boot.jpg';
import figma from '../images/figma.jpeg';
import css from '../images/css.png';
import firebase from '../images/firebase.png';
import javascript from '../images/javascript.png';
import node from '../images/node.jpg';
import scrum from '../images/scrum.png';
import react from '../images/react.png';
import sa from '../images/sa.jpg';
import github5 from '../images/github5.png';
import html from '../images/html.png';
import ParticlesWrapper from '../components/particles';






const AboutMe = () => {

  
    const [scrollY, setScrollY] = useState(0);
  
    function logit() {
      setScrollY(window.pageYOffset);
    }
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      // Remove listener (like componentWillUnmount)
      return () => {
        window.removeEventListener("scroll", logit);
      };
    }, []);
  

  return (
    <div className="wrapper">
  
      <ParticlesWrapper />
      <SearchingBar />
      <Jumbotron>
        <div className="card-deck" >
          <div className="card text-center">
            <Col s={6} className="card-body">
              <h2 className="text">
                Sobre Mí
              </h2>
              <br />
              <p className="card-text1">
                Front-end Developer, especializada en el desarrollo de interfaces, aplicando metodologías
                ágiles y arquitectura de sitios . Egresada del Programa Front-end Development en Laboratoria.
		          </p>
              <Btn />
            </Col>
          </div>
          <div className="card text-center" >
            
            <Col s={6} className="card-body">
              <h2 className="text">
                Habilidades
              </h2>
              <div className="card-columns" >
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={javascript} alt="javascript" />
                        <h5 className="card-title">Javascript</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={firebase} alt="firebase" />
                        <h5 className="card-title">Firebase</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={node} alt="node" />
                        <h5 className="card-title">Node</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={scrum} alt="Scrum" />
                        <h5 className="card-title">Scrum</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={react} alt="React" />
                        <h5 className="card-title">React</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={html} alt="html" />
                        <h5 className="card-title">HTML5</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={css} alt="css" />
                        <h5 className="card-title">CSS3</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={github5} alt="github" />
                        <h5 className="card-title">Github</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={figma} alt="figma" />
                        <h5 className="card-title">Figma</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={sa} alt="sass" />
                        <h5 className="card-title">Sass</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card text-center " >
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img className="icon " src={boot} alt="bootstrap" />
                        <h5 className="card-title">Bootstrap</h5>
                        <div className="flip-card-back">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </Jumbotron>
    </div>
  )
}

export default AboutMe;