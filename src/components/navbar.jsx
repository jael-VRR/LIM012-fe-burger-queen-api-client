
import React from 'react'
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/navbar.css';
import frame from '../images/frame.png'


const SearchingBar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" variant="dark">
				<Navbar.Brand href="#home">
					<img
						alt=""
						src={frame}
						width="60"
						height="60"
						className="d-inline-block align-top"
					/>{' '}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				<NavDropdown  >
         
            
          
         
          </NavDropdown>
					<Nav  activeKey="/">
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
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default SearchingBar;