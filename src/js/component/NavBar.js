import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/component/NavBar.scss";

export const NavBar = () => {
	return (
		<Navbar expand="lg">
			<Navbar.Brand />
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Link to="/Main/Populares">Populares</Link>
					<Link to="/Main/Snacks">Snacks</Link>
					<Link to="/Main/Alimentos">Alimentos</Link>
					<Link to="/Main/Bebidas">Bebidas</Link>
					<Link to="/Main/Limpieza">Limpieza</Link>
					<Link to="/Main/Higiene">Higiene Personal</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
