import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

import "../../styles/views/Home.scss";

export const Home = () => (
	<div className="container-general">
		<div className="container-logo">
			<Image cloudName="duu99bl6f" publicId="logo" className="logo" />
		</div>

		<div className="container-main">
			<header>
				<h1>Catálogo Online</h1>
				<p className="header-words">Pasos a seguir</p>
			</header>

			<main>
				<div className="container-img">
					<Image cloudName="duu99bl6f" publicId="bodegon" className="steps-image" />
					<p>Elige los productos de tu preferencia</p>
				</div>
				<div className="container-img">
					<Image cloudName="duu99bl6f" publicId="carrito_de_compras" className="steps-image" />
					<p>Ingresa en tu carrito</p>
				</div>
				<div className="container-img">
					<Image cloudName="duu99bl6f" publicId="factura" className="steps-image" />
					<p>Envía tu pedido a nuestro whatsapp</p>
				</div>
			</main>

			<footer>
				<Link to="/Main">
					<Button variant="dark" onClick={() => window.scrollTo(0, 0)} className="button-start">
						EMPEZAR AHORA
					</Button>
				</Link>
			</footer>
		</div>
	</div>
);
