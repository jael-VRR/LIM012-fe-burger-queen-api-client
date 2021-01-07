
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/navbar.css';
import frame from '../images/frame.png'


const SearchingBar = () => {
	return (
		<>
			<Navbar className="justify-content-end">
				<Nav activeKey="/">
					<Nav.Item >
						<Nav.Link className="item samp" href=""><samp><img src={frame} alt="" style={{width:"60px",height:"60px"}} /></samp></Nav.Link>
					</Nav.Item>
					<Nav.Item >
						<Nav.Link className="item" href="/">Home</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="item" href="/aboutMe">Acerca de mí</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="item" href="/projects">Proyectos</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className="item" href="/contactMe">Contacto</Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		</>
	);
}

export default SearchingBar;