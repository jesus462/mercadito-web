import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";

import { NavBar } from "../component/NavBar";
import { ItemCard } from "../component/ItemCard";

import "../../styles/views/Main.scss";

export const Main = () => {
	const { store, actions } = useContext(Context);

	let itemCards = store.items.map(item => {
		return <ItemCard key={item.id} item={item} />;
	});

	return (
		<div>
			<NavBar />
			<p className="header">ELIGE LOS PRODUCTOS DE TU PREFERENCIA</p>
			<div className="card-container">{itemCards}</div>
		</div>
	);
};
