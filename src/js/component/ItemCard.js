import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

import holder from "../../img/holder.png";

import "../../styles/component/ItemCard.scss";

export const ItemCard = ({ item }) => {
	const { store, actions } = useContext(Context);

	const [unit, setUnit] = useState(1);

	const handleClickAddCart = e => {
		item.units = unit;
		store.cartItems.push(item);
	};

	return (
		<Card className="full-card">
			<Card.Img variant="top" src={holder} className="card-img" />
			<Card.Body className="card-body">
				<Card.Title>{item.name}</Card.Title>
				<Card.Subtitle className="price-section">${item.price}</Card.Subtitle>
				<Card.Text className="full-input">
					<InputGroup className="mb-3 input-style">
						<InputGroup.Prepend>
							<Button
								variant="outline-secondary"
								className="input-button"
								onClick={() => setUnit(unit + 1)}>
								+
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
								onClick={() => (unit >= 2 ? setUnit(unit - 1) : setUnit(unit - 0))}>
								-
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</Card.Text>
				<Button className="button-start" onClick={handleClickAddCart}>
					AGREGAR
				</Button>
			</Card.Body>
		</Card>
	);
};

ItemCard.propTypes = {
	item: PropTypes.object
};
