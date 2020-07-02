import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Image } from "cloudinary-react";

import "../../styles/component/NavBar.scss";

export const NavBar = ({ cartCounter }) => {
	const { store, actions } = useContext(Context);

	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let totalUnits = store.totalUnits.reduce(reducer);

	return (
		<Navbar className="full-navbar" expand="sm">
			<Navbar.Brand>
				<Link to="/Main" onClick={() => window.scrollTo(0, 0)}>
					<Image cloudName={store.cloudinary.userName} publicId="logo_m" className="logo" />
				</Link>
			</Navbar.Brand>
			<Navbar.Collapse className="links-container" id="basic-navbar-nav">
				<Link className="nav-links" to="/Main/Promo" onClick={() => window.scrollTo(0, 0)}>
					Promociones
				</Link>
				<Link className="nav-links" to="/Main/Snacks" onClick={() => window.scrollTo(0, 0)}>
					Snacks
				</Link>
				<Link className="nav-links" to="/Main/Alimentos" onClick={() => window.scrollTo(0, 0)}>
					Alimentos
				</Link>
				<Link className="nav-links" to="/Main/Limpieza" onClick={() => window.scrollTo(0, 0)}>
					Limpieza
				</Link>
				<Link className="nav-links" to="/Main/Higiene" onClick={() => window.scrollTo(0, 0)}>
					Cuidado Personal
				</Link>
			</Navbar.Collapse>
			<Link to="/Billing">
				<Button variant="light" className="icon-button" onClick={() => window.scrollTo(0, 0)}>
					<Image cloudName={store.cloudinary.userName} publicId="shopping" className="icon-cart" />
					<Button
						variant="danger"
						className="cart-indicator"
						style={{ display: store.cartItems.length >= 1 ? "inline" : "none" }}>
						{cartCounter === totalUnits ? cartCounter : (cartCounter = totalUnits)}
					</Button>
				</Button>
			</Link>
		</Navbar>
	);
};

NavBar.propTypes = {
	cartCounter: PropTypes.number
};
