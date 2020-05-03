import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";
import search from "../../img/search.png";
import shopping from "../../img/shopping-cart.png";

import "../../styles/component/NavBar.scss";

export const NavBar = () => {
	return (
		<Navbar className="full-navbar" expand="lg">
			<Navbar.Brand>
				<img src={logo} className="logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Link className="nav-links" to="/Main/Populares">
						Populares
					</Link>
					<Link className="nav-links" to="/Main/Snacks">
						Snacks
					</Link>
					<Link className="nav-links" to="/Main/Alimentos">
						Alimentos
					</Link>
					<Link className="nav-links" to="/Main/Bebidas">
						Bebidas
					</Link>
					<Link className="nav-links" to="/Main/Limpieza">
						Limpieza
					</Link>
					<Link className="nav-links" to="/Main/Higiene">
						Higiene Personal
					</Link>
				</Nav>
			</Navbar.Collapse>
			<img src={search} className="icon" />
			<img src={shopping} className="icon" />
		</Navbar>
	);
};
