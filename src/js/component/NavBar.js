import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ShoppingCartModal } from "./ShoppingCartModal";

import logo from "../../img/logo.png";
import shopping from "../../img/shopping-cart.png";

import "../../styles/component/NavBar.scss";

export const NavBar = () => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
			<Button variant="light" onClick={handleShow} className="icon-button">
				<img src={shopping} className="icon-cart" />
			</Button>

			<ShoppingCartModal show={show} handleClose={handleClose} />
		</Navbar>
	);
};
