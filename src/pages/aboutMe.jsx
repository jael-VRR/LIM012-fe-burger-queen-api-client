import React from 'react';
import { Jumbotron, Row, ListGroup, Col } from 'react-bootstrap';
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
import github1 from '../images/github1.png';
import html from '../images/html.png';
import ParticlesWrapper from '../components/particles';
//import Viewer from '../components/viewer';



const AboutMe = () => {
	return (
		<div className="wrapper">
			<ParticlesWrapper/> 
			<SearchingBar />
			<Jumbotron>
			<Row className="justify-content-center align-items-center vh-100">
				<Col s={6}>
					<h2 className="mb-0">
						Acerca de mí
          </h2>
					<br/>
					<p className="text">
						Front-end Developer, especializada en el desarrollo de interfaces, aplicando metodologías
						ágiles y arquitectura de sitios . Egresada del Programa Front-end Development en Laboratoria.
		      </p>
					<Btn/>
				</Col>
				<Col s={6}>
				  <h2 className="mb-0">
						Herramientas
          </h2>
					<br/>
					<ListGroup horizontal>
						<ListGroup.Item >
							<img className="icon" src={javascript} alt="" />
							<h5>Javascript</h5>
						</ListGroup.Item>
						<ListGroup.Item>
							<img className="icon" src={firebase} alt="" />
							<h5>Firebase</h5>
						</ListGroup.Item>
						<ListGroup.Item>
							<img className="icon" src={node} alt="" />
							<h5>Node</h5>
						</ListGroup.Item>
						<ListGroup.Item>
							<img className="icon" src={scrum} alt="" />
							<h5>Scrum</h5>
						</ListGroup.Item>
						<ListGroup.Item>
							<img className="icon" src={react} alt="" />
							<h5>React</h5>
						</ListGroup.Item>
						<ListGroup.Item>
							<img className="icon" src={html} alt="" />
							<h5>HTML5</h5>
						</ListGroup.Item>
					</ListGroup>
					<br />
					<br />
					<ListGroup horizontal>
						<ListGroup.Item>
							<img className="icon" src={css} alt="" />
							<h5>CSS3</h5>
						</ListGroup.Item>
						<ListGroup.Item>
							<img className="icon" src={github1} alt="" />
							<h5>Github</h5>
						</ListGroup.Item>
						<ListGroup.Item>
							<img className="icon" src={figma} alt="" />
							<h5>Figma</h5>
						</ListGroup.Item>
						<ListGroup.Item>
							<img className="icon" src={sa} alt="" />
							<h5>Sass</h5>
						</ListGroup.Item>
						<ListGroup.Item>
							<img className="icon" src={boot} alt="" />
							<h5>Boostrap</h5>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			</Jumbotron>
		</div>
	)
}

export default AboutMe;