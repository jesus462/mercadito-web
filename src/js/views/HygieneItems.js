import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import { NavBar } from "../component/NavBar";
import { ItemCard } from "../component/ItemCard";
import { MobileNavbar } from "../component/MobileNavbar";

import searchIcon from "../../img/search.png";

import "../../styles/views/HygieneItems.scss";

export const HygieneItems = () => {
	const { store, actions } = useContext(Context);

	const [search, setSearch] = useState("");

	const [cartCounter, setCartCounter] = useState(0);

	const currentPage = "hygiene";

	const handleChangeSearch = e => {
		setSearch(e.target.value);
	};

	let filteredHygieneItems = store.items.filter(item => {
		if (search.length < 1) {
			return item.type.toLowerCase() == "higiene";
		} else {
			return item.name.toLowerCase().indexOf(search.toLowerCase()) == !-1;
		}
	});

	let itemCards = filteredHygieneItems.map(item => {
		return <ItemCard key={item.id} item={item} cartCounter={cartCounter} setCartCounter={setCartCounter} />;
	});

	return (
		<div>
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
								<img src={searchIcon} className="icon" />
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</div>
			</div>
			<MobileNavbar currentPage={currentPage} />
			<p className="section">Higiene Personal</p>
			<p className="back">
				<Link className="text" to="/Main" onClick={() => window.scrollTo(0, 0)}>
					Volver a Principal
				</Link>
			</p>
			<div className="card-container">{itemCards}</div>
		</div>
	);
};
