import React, { Component } from "react";
import { Button } from "react-bootstrap";

import logo from "../../img/logo.jpg";
import carritoDeCompras from "../../img/carrito-de-compras.jpg";
import bodegon from "../../img/bodegon.jpg";
import factura from "../../img/factura.png";

import "../../styles/views/Home.scss";

export const Home = () => (
	<div className="container-general">
		<div className="container-logo">
			<img src={logo} className="logo" />
		</div>

		<div className="container-main">
			<header>
				<h1>Catálogo Online</h1>
				<p className="header-words">Pasos a seguir</p>
			</header>

			<main>
				<div className="container-img">
					<img className="steps-image" src={bodegon} />
					<p>Elige los productos de tu preferencia</p>
				</div>
				<div className="container-img">
					<img className="steps-image" src={carritoDeCompras} />
					<p>Ingresa en tu carrito</p>
				</div>
				<div className="container-img">
					<img className="steps-image" src={factura} />
					<p>Envía tu pedido a nuestro whatsapp</p>
				</div>
			</main>

			<footer>
				<Button variant="danger" className="button-start">
					EMPEZAR AHORA
				</Button>
			</footer>
		</div>
	</div>
);
