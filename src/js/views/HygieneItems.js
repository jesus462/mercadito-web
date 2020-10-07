import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

import { NavBar } from "../component/NavBar";
import { ItemCard } from "../component/ItemCard";
import { MobileNavbar } from "../component/MobileNavbar";

import "../../styles/views/HygieneItems.scss";

export const HygieneItems = () => {
	const { store, actions } = useContext(Context);

	const [search, setSearch] = useState("");

	const [cartCounter, setCartCounter] = useState(0);

	const currentPage = "care";

	const handleChangeSearch = e => {
		setSearch(e.target.value);
		window.scrollTo(0, 0);
	};

	let filteredHygieneItems = store.items.filter(item => {
		if (search.length < 1) {
			if (typeof item.CATEGORIA === "string") {
				return item.CATEGORIA.toLowerCase() == "cuidado personal";
			}
		} else {
			return item.DESCRIPCION.toLowerCase().includes(search.toLowerCase());
		}
	});

	let itemCards = filteredHygieneItems.map(item => {
		return <ItemCard key={item.id} item={item} cartCounter={cartCounter} setCartCounter={setCartCounter} />;
	});

	return (
		<div className="container-whole">
			<div className="sticky-top">
				<NavBar />
				<div className="search-bar">
					<InputGroup className="mb-3 search-bar-style">
						<FormControl
							value={search}
							onChange={handleChangeSearch}
							type="text"
							aria-describedby="basic-addon1"
							className="input"
							placeholder="Elige los productos de tu preferencia"
						/>
						<InputGroup.Append>
							<Button variant="light" className="button-search">
								<Image cloudName={store.cloudinary.userName} publicId="search_logo" className="icon" />
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</div>
			</div>
			<MobileNavbar currentPage={currentPage} />
			<p className="section">Cuidado Personal</p>
			<p className="back">
				<Link className="text" to="/Main" onClick={() => window.scrollTo(0, 0)}>
					<i className="fas fa-angle-left" /> Volver a Principal
				</Link>
			</p>
			<div className="card-container">
				{store.loadingItems ? (
					<h4 className="loading">cargando...</h4>
				) : itemCards.length < 1 && store.noItems ? (
					<h4 className="no-items">Estamos actualizando inventario, regrese en 10 minutos.</h4>
				) : itemCards.length < 1 ? (
					<h4 className="no-items">No tenemos ese producto actualmente.</h4>
				) : (
					itemCards
				)}
			</div>
		</div>
	);
};
