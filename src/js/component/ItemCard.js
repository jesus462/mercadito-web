import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Card } from "react-bootstrap";

import holder from "../../img/holder.png";

import "../../styles/component/ItemCard.scss";

export const ItemCard = () => {
	return (
		<Card className="full-card">
			<Card.Img variant="top" src={holder} />
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};
