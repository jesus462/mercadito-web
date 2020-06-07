import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, InputGroup, FormControl } from "react-bootstrap";

import { NavBar } from "../component/NavBar";
import { ItemCard } from "../component/ItemCard";
import { MobileNavbar } from "../component/MobileNavbar";

import searchIcon from "../../img/search.png";

import "../../styles/views/CleaningItems.scss";

export const CleaningItems = () => {
	const { store, actions } = useContext(Context);

	const [search, setSearch] = useState("");

	const [count, setCount] = useState(0);

	const [cartCounter, setCartCounter] = useState(0);

	const handleClickForward = () => {
		setCount(count + 6);
		window.scrollTo(0, 0);
	};

	const handleClickBackward = () => {
		setCount(count - 6);
		window.scrollTo(0, 0);
	};

	const handleChangeSearch = e => {
		setSearch(e.target.value);
		setCount(0);
	};

	let filteredCleaningItems = store.items.filter(item => {
		if (search.length < 1) {
			return item.type.toLowerCase() == "limpieza";
		} else {
			return item.name.toLowerCase().indexOf(search.toLowerCase()) == !-1;
		}
	});

	let itemCards = filteredCleaningItems.slice(count, count + 6).map(item => {
		return <ItemCard key={item.id} item={item} cartCounter={cartCounter} setCartCounter={setCartCounter} />;
	});

	return (
		<div>
			<div className="sticky-top">
				<NavBar cartCounter={cartCounter} />
				<p className="header">ELIGE LOS PRODUCTOS DE TU PREFERENCIA</p>
				<div className="search-bar">
					<InputGroup className="mb-3 search-bar-style">
						<FormControl
							value={search}
							onChange={handleChangeSearch}
							type="text"
							aria-describedby="basic-addon1"
							className="input"
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
			<div className="buttons-container">
				<Button
					variant="dark"
					className="buttons"
					onClick={handleClickBackward}
					style={{ display: count < 6 ? "none" : "inline" }}>
					<i className="fas fa-backward" />
				</Button>
				<Button
					variant="dark"
					className="buttons"
					onClick={handleClickForward}
					style={{
						display: itemCards.length < 5 || filteredCleaningItems.length < count + 7 ? "none" : "inline"
					}}>
					<i className="fas fa-forward" />
				</Button>
			</div>
		</div>
	);
};
