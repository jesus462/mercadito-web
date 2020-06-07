import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/component/MobileNavbar.scss";

export const MobileNavbar = () => {
	return (
		<div className="links-bar">
			<Link to="/Main/Populares">
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Populares
				</Button>
			</Link>
			<Link to="/Main/Snacks">
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Snacks
				</Button>
			</Link>
			<Link to="/Main/Alimentos">
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Alimentos
				</Button>
			</Link>
			<Link to="/Main/Bebidas">
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Bebidas
				</Button>
			</Link>
			<Link to="/Main/Limpieza">
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Limpieza
				</Button>
			</Link>
			<Link to="/Main/Higiene">
				<Button onClick={() => window.scrollTo(0, 0)} variant="dark" className="link-button">
					Higiene Personal
				</Button>
			</Link>
		</div>
	);
};
