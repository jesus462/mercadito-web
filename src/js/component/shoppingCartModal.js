import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import PropTypes from "prop-types";
import { Modal, Button, Table } from "react-bootstrap";

import "../../styles/component/ShoppingCartModal.scss";

export const ShoppingCartModal = ({ handleClose, show }) => {
	const { store, actions } = useContext(Context);

	const handleClickCartDelete = e => {
		store.cartItems = [];
		handleClose();
	};

	let cartItems = store.cartItems.map(cartItem => {
		return (
			<tr key={cartItem.id}>
				<td>
					{cartItem.units} x {cartItem.name}
				</td>
				<td>${cartItem.price}</td>
			</tr>
		);
	});

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Carrito de Compras</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Table bordered hover className="table-style">
					<tbody>{cartItems}</tbody>
				</Table>
				<div className="button-flex">
					<Button variant="danger" className="delete-button" onClick={handleClickCartDelete}>
						Vaciar Carrito
					</Button>
				</div>
			</Modal.Body>
			<Modal.Footer className="buttons-footer">
				<Button variant="dark" onClick={handleClose} className="shopping-button">
					Seguir Comprando
				</Button>
				<Button variant="dark" onClick={handleClose} className="shopping-button">
					Pasar a Facturación
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

ShoppingCartModal.propTypes = {
	handleClose: PropTypes.func,
	show: PropTypes.boolean
};
