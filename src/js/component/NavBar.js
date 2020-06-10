import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ShoppingCartModal } from "./ShoppingCartModal";

import logo from "../../img/logo.png";
import shopping from "../../img/shopping-cart.png";

import "../../styles/component/NavBar.scss";

export const NavBar = ({ cartCounter }) => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(false);
	const handleClose = () => {
		setShow(false);
	};
	const handleShow = () => {
		setShow(true);
	};

	return (
		<Navbar className="full-navbar" expand="sm">
			<Navbar.Brand>
				<Link to="/Main" onClick={() => window.scrollTo(0, 0)}>
					<img src={logo} className="logo" />
				</Link>
			</Navbar.Brand>
			<Navbar.Collapse className="links-container" id="basic-navbar-nav">
				<Link className="nav-links" to="/Main/Populares" onClick={() => window.scrollTo(0, 0)}>
					Populares
				</Link>
				<Link className="nav-links" to="/Main/Snacks" onClick={() => window.scrollTo(0, 0)}>
					Snacks
				</Link>
				<Link className="nav-links" to="/Main/Alimentos" onClick={() => window.scrollTo(0, 0)}>
					Alimentos
				</Link>
				<Link className="nav-links" to="/Main/Bebidas" onClick={() => window.scrollTo(0, 0)}>
					Bebidas
				</Link>
				<Link className="nav-links" to="/Main/Limpieza" onClick={() => window.scrollTo(0, 0)}>
					Limpieza
				</Link>
				<Link className="nav-links" to="/Main/Higiene" onClick={() => window.scrollTo(0, 0)}>
					Higiene Personal
				</Link>
			</Navbar.Collapse>
			<Button variant="light" onClick={handleShow} className="icon-button">
				<img src={shopping} className="icon-cart" />
				<Button
					variant="danger"
					className="cart-indicator"
					style={{ display: store.cartItems.length >= 1 ? "inline" : "none" }}>
					{cartCounter === store.cartItems.length ? cartCounter : (cartCounter = store.cartItems.length)}
				</Button>
			</Button>
			<ShoppingCartModal show={show} handleClose={handleClose} />
		</Navbar>
	);
};

NavBar.propTypes = {
	cartCounter: PropTypes.number
};
