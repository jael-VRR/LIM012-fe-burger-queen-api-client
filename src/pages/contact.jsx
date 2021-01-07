import React from 'react';
import { Jumbotron, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchingBar from '../components/navbar';
import '../style/contact.css';
import ParticlesWrapper from '../components/particles';

//mport ImageCarousel from '../components/carousel'


const ContactMe = () => {
	return (
		<div className="wrapper">
			<ParticlesWrapper />
			<SearchingBar />
			<Jumbotron>
				<div className="card">
					<Media>
						<div className="card-body">
							<h2 className="text">Contacto</h2>
							<a href="https://drive.google.com/file/d/1MZuYmfJMxcE6S0PHibYdTczvb6zj2TSt/view?usp=sharing"><i className="fa fa-envelope fa-4x icon-3d"></i></a>
							<a href="https://github.com/jael-VRR"><i className="fa fa-github fa-4x icon-3d"></i></a>
							<a href="https://www.linkedin.com/in/jaelrodr%C3%ADguez/"><i className="fa fa-linkedin fa-4x icon-3d"></i></a>
							<i className="fa fa-instagram fa-4x icon-3d"></i>
							<i className="fa fa-whatsapp fa-4x icon-3d"></i>
							<i className="fa fa-twitter fa-4x icon-3d"></i>
						</div>
					</Media>
				</div>
			</Jumbotron>
		</div>
	)
}

export default ContactMe;