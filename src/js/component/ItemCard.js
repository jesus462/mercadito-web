import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

import holder from "../../img/holder.png";

import "../../styles/component/ItemCard.scss";

export const ItemCard = ({ item, cartCounter, setCartCounter }) => {
	const { store, actions } = useContext(Context);

	const [unit, setUnit] = useState(1);

	const handleClickAddItem = e => {
		if (store.cartItems.length < 1) {
			item.units = unit;
			store.cartItems.push(item);
			setCartCounter(cartCounter + 1);
		} else {
			let filterByCode = store.cartItems.filter(cartItem => {
				return cartItem.code === item.code;
			});
			if (filterByCode.length > 0) {
				filterByCode[0].units += unit;
			} else {
				item.units = unit;
				store.cartItems.push(item);
				setCartCounter(cartCounter + 1);
			}
			/*let inCart = 0;
			let outCart = 0;

			console.log("else");
			for (let i = 0; i < store.cartItems.length; i++) {
				if (store.cartItems[i].code === item.code && outCart == 0 && inCart == 0) {
					inCart = +1;
					store.cartItems[i].units += unit;
					console.log("ya en carrito");
				} else if (store.cartItems[i].code !== item.code && inCart == 0 && outCart == 0) {
					outCart = +1;
					item["units"] = unit;
					store.cartItems.push(item);
					setCartCounter(cartCounter + 1);
					console.log("no esta en carrito agregar");
				} else if (inCart > 0) {
					break;
				}
			}*/
		}

		setUnit(1);
	};

	return (
		<Card className="full-card">
			<div className="img-container">
				<Card.Img variant="top" src={holder} className="card-img" />
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
