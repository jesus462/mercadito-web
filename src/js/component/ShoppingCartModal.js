import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import PropTypes from "prop-types";
import { Modal, Button, Table, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import { EditableCartItems } from "./EditableCartItems";

import "../../styles/component/ShoppingCartModal.scss";

export const ShoppingCartModal = ({ handleClose, show }) => {
	const { store, actions } = useContext(Context);

	const [cartEdit, setCartEdit] = useState([]);

	const [edit, setEdit] = useState(false);

	const handleClickCartDelete = e => {
		store.cartItems = [];
		handleClose();
	};

	const handleClickStartEdit = e => {
		setCartEdit(store.cartItems);
		setEdit(true);
	};

	const handleClickEndEdit = e => {
		setEdit(false);
		store.cartItems = cartEdit;
	};

	let allSubTotalArray = [0];
	let cartItems = store.cartItems.map(cartItem => {
		cartItem.subTotal = cartItem.price * cartItem.units;
		allSubTotalArray.push(cartItem.subTotal);

		return (
			<tr key={cartItem.id}>
				<td className="cell-data">
					<strong>{cartItem.units}</strong> x {cartItem.name}
				</td>
				<td className="cell-data">${cartItem.price}</td>
				<td className="cell-data">${cartItem.subTotal}</td>
			</tr>
		);
	});

	let editableCartItems = cartEdit.map(cartEditItem => {
		return (
			<EditableCartItems
				cartEditItem={cartEditItem}
				key={cartEditItem.id}
				cartEdit={cartEdit}
				setCartEdit={setCartEdit}
			/>
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
							<th className="cell-header" style={{ display: !edit ? "none" : "table-cell" }}>
								Cantidad
							</th>
							<th className="cell-header">Producto</th>
							<th className="cell-header">Precio</th>
							<th className="cell-header" style={{ display: edit ? "none" : "table-cell" }}>
								Subtotal
							</th>
						</tr>
					</thead>
					<tbody>{edit ? editableCartItems : cartItems}</tbody>
					<tfoot>
						<tr>
							<td colSpan="4" className="total-row" style={{ display: edit ? "none" : "table-cell" }}>
								Total: ${total}
							</td>
						</tr>
					</tfoot>
				</Table>
				<div className="button-flex">
					<Button
						variant="danger"
						className="delete-button"
						onClick={handleClickStartEdit}
						style={{ display: store.cartItems.length < 1 || edit ? "none" : "inline" }}>
						Editar Carrito
					</Button>
					<Button
						variant="danger"
						className="delete-button"
						onClick={handleClickEndEdit}
						style={{ display: !edit ? "none" : "inline" }}>
						Guardar Cambios
					</Button>
					<Button
						variant="danger"
						className="delete-button"
						onClick={handleClickCartDelete}
						style={{ display: edit || store.cartItems.length < 1 ? "none" : "inline" }}>
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
					style={{ display: store.cartItems.length < 1 || edit ? "none" : "inline" }}>
					<Button variant="dark" className="shopping-button" onClick={handleClose}>
						Finalizar Compra
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
