import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import PropTypes from "prop-types";
import { Modal, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../styles/component/ShoppingCartModal.scss";

export const ShoppingCartModal = ({ handleClose, show }) => {
	const { store, actions } = useContext(Context);

	const handleClickCartDelete = e => {
		store.cartItems = [];
		handleClose();
		window.location.reload(false);
	};

	let allSubTotalArray = [0];

	let cartItems = store.cartItems.map(cartItem => {
		cartItem.subTotal = cartItem.price * cartItem.units;
		allSubTotalArray.push(cartItem.subTotal);

		return (
			<tr key={cartItem.id}>
				<td>{cartItem.units}</td>
				<td>{cartItem.name}</td>
				<td>${cartItem.price}</td>
				<td>${cartItem.subTotal}</td>
			</tr>
		);
	});

	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let total = allSubTotalArray.reduce(reducer);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Carrito de Compras</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Table bordered hover className="table-style">
					<thead>
						<tr>
							<th>Cantidad</th>
							<th>Producto</th>
							<th>Precio</th>
							<th>Subtotal</th>
						</tr>
					</thead>
					<tbody>{cartItems}</tbody>
					<tfoot>
						<tr>
							<td colSpan="4" className="total-row">
								Total: ${total}
							</td>
						</tr>
					</tfoot>
				</Table>
				<div className="button-flex">
					<Button
						variant="danger"
						className="delete-button"
						onClick={handleClickCartDelete}
						style={{ display: store.cartItems.length < 1 ? "none" : "inline" }}>
						Vaciar Carrito
					</Button>
				</div>
			</Modal.Body>
			<Modal.Footer className="buttons-footer">
				<Button variant="dark" onClick={handleClose} className="keep-shopping-button">
					Seguir Comprando
				</Button>
				<Link
					to="/Billing"
					className="billing-button"
					style={{ display: store.cartItems.length < 1 ? "none" : "inline" }}>
					<Button variant="dark" className="shopping-button" onClick={handleClose}>
						Pasar a Facturación
					</Button>
				</Link>
			</Modal.Footer>
		</Modal>
	);
};

ShoppingCartModal.propTypes = {
	handleClose: PropTypes.func,
	show: PropTypes.boolean
};
