import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

import { NavBar } from "../component/NavBar";
import { ItemCard } from "../component/ItemCard";
import { MobileNavbar } from "../component/MobileNavbar";

import "../../styles/views/FoodItems.scss";

export const FoodItems = () => {
	const { store, actions } = useContext(Context);

	const [search, setSearch] = useState("");

	const [cartCounter, setCartCounter] = useState(0);

	const currentPage = "food";

	const handleChangeSearch = e => {
		setSearch(e.target.value);
	};

	let filteredFoodItems = store.items.filter(item => {
		if (search.length < 1) {
			return item.type.toLowerCase() == "alimentos";
		} else {
			return item.name.toLowerCase().includes(search.toLowerCase());
		}
	});

	let itemCards = filteredFoodItems.map(item => {
		return <ItemCard key={item.id} item={item} cartCounter={cartCounter} setCartCounter={setCartCounter} />;
	});

	return (
		<div className="container-whole">
			<div className="sticky-top">
				<NavBar cartCounter={cartCounter} />
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
			<p className="section">Alimentos</p>
			<p className="back">
				<Link className="text" to="/Main" onClick={() => window.scrollTo(0, 0)}>
					<i className="fas fa-angle-left" /> Volver a Principal
				</Link>
			</p>
			<div className="card-container">{itemCards}</div>
		</div>
	);
};
