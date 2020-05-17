import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

import holder from "../../img/holder.png";

import "../../styles/component/ItemCard.scss";

export const ItemCard = ({ item }) => {
	const { store, actions } = useContext(Context);

	const handleClickCart = e => {
		store.cartItems.push(item);
	};

	return (
		<Card className="full-card">
			<Card.Img variant="top" src={holder} />
			<Card.Body>
				<Card.Title>{item.name}</Card.Title>
				<Card.Subtitle>${item.price}</Card.Subtitle>
				<Card.Text />
				<Button variant="danger" className="button-start" onClick={handleClickCart}>
					AGREGAR AL CARRITO
				</Button>
			</Card.Body>
		</Card>
	);
};

ItemCard.propTypes = {
	item: PropTypes.object
};
