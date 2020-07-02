import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

import "../../styles/views/Home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-general">
			<div className="container-logo">
				<Image cloudName={store.cloudinary.userName} publicId="logo_m" className="logo" />
			</div>

			<div className="container-main">
				<header>
					<h1>Catálogo Online</h1>
					<p className="header-words">Pasos a seguir:</p>
				</header>

				<main>
					<div className="container-img">
						<Image cloudName={store.cloudinary.userName} publicId="bodegon" className="steps-image" />
						<div className="text-container">
							<p>1. Elige los productos de tu preferencia</p>
						</div>
					</div>
					<div className="container-img">
						<Image
							cloudName={store.cloudinary.userName}
							publicId="carrito_de_compras"
							className="steps-image"
						/>
						<div className="text-container">
							<p>2. Ingresa en tu carrito</p>
						</div>
					</div>
					<div className="container-img">
						<Image cloudName={store.cloudinary.userName} publicId="factura" className="steps-image" />
						<div className="text-container">
							<p>3. Envía tu pedido a nuestro WhatsApp</p>
						</div>
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
};
