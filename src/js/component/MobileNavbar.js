import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/component/MobileNavbar.scss";

export const MobileNavbar = ({ currentPage }) => {
	return (
		<div className="links-bar">
			<Link to="/Main/Promo" style={{ display: currentPage === "promo" ? "none" : "inline" }}>
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Promoción
				</Button>
			</Link>
			<Link to="/Main/Snacks" style={{ display: currentPage === "snacks" ? "none" : "inline" }}>
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Snacks
				</Button>
			</Link>
			<Link to="/Main/Alimentos" style={{ display: currentPage === "food" ? "none" : "inline" }}>
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Alimentos
				</Button>
			</Link>
			<Link to="/Main/Limpieza" style={{ display: currentPage === "cleaning" ? "none" : "inline" }}>
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Limpieza
				</Button>
			</Link>
			<Link to="/Main/Higiene" style={{ display: currentPage === "care" ? "none" : "inline" }}>
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Cuidado Personal
				</Button>
			</Link>
		</div>
	);
};

MobileNavbar.propTypes = {
	currentPage: PropTypes.string
};
