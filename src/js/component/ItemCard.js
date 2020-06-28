import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";
import { Image } from "cloudinary-react";
import PropTypes from "prop-types";

import "../../styles/component/ItemCard.scss";

export const ItemCard = ({ item, cartCounter, setCartCounter }) => {
	const { store, actions } = useContext(Context);

	const [unit, setUnit] = useState(1);

	const [unitIndicator, setUnitIndicator] = useState(0);

	let filterByCode = store.cartItems.filter(cartItem => {
		return cartItem.code === item.code;
	});

	const handleClickAddItem = e => {
		if (store.cartItems.length < 1) {
			item.units = unit;
			store.cartItems.push(item);
			setCartCounter((cartCounter += unit));
			store.totalUnits.push(unit);
		} else {
			if (filterByCode.length > 0) {
				filterByCode[0].units += unit;
				setCartCounter((cartCounter += unit));
				store.totalUnits.push(unit);
			} else {
				item.units = unit;
				store.cartItems.push(item);
				setCartCounter((cartCounter += unit));
				store.totalUnits.push(unit);
			}
		}

		setUnit(1);
	};

	return (
		<Card style={{ border: filterByCode.length > 0 ? "1px solid #0E0A56" : "none" }} className="full-card">
			<div className="img-container">
				<p style={{ display: filterByCode.length > 0 ? "inline" : "none" }} className="cart-indicator">
					Has agregado el producto al carrito
				</p>
				<Image cloudName="duu99bl6f" publicId={item.code} className="card-img" />
			</div>
			<Card.Body className="card-body">
				<Card.Title className="name-section">{item.name}</Card.Title>
				<Card.Subtitle className="price-section">${item.price}</Card.Subtitle>
				<Card.Text className="full-input">
					<InputGroup className="mb-3 input-style">
						<InputGroup.Prepend>
							<Button
								variant="outline-secondary"
								className="input-button"
								onClick={() => (unit >= 2 ? setUnit(unit - 1) : setUnit(unit - 0))}>
								-
							</Button>
						</InputGroup.Prepend>
						<FormControl
							aria-describedby="basic-addon1"
							type="number"
							min="1"
							className="input-text"
							value={unit}
						/>
						<InputGroup.Append>
							<Button
								variant="outline-secondary"
								className="input-button"
								onClick={() => setUnit(unit + 1)}>
								+
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Card.Text>
				<Button className="button-start" onClick={handleClickAddItem}>
					AGREGAR
				</Button>
			</Card.Body>
		</Card>
	);
};

ItemCard.propTypes = {
	item: PropTypes.object,
	cartCounter: PropTypes.number,
	setCartCounter: PropTypes.func
};
