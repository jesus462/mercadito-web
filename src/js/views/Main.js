import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, InputGroup, FormControl } from "react-bootstrap";

import { NavBar } from "../component/NavBar";
import { ItemCard } from "../component/ItemCard";
import { MobileNavbar } from "../component/MobileNavbar";

import searchIcon from "../../img/search.png";

import "../../styles/views/Main.scss";

export const Main = () => {
	const { store, actions } = useContext(Context);

	const [search, setSearch] = useState("");

	const [cartCounter, setCartCounter] = useState(0);

	const handleChangeSearch = e => {
		setSearch(e.target.value);
	};

	let filteredItems = store.items.filter(item => {
		return item.name.toLowerCase().indexOf(search.toLowerCase()) == !-1;
	});

	let itemCards = filteredItems.map(item => {
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
			<MobileNavbar />
			<div className="card-container">{itemCards}</div>
		</div>
	);
};
