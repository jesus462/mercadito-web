import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Table, InputGroup, FormControl } from "react-bootstrap";

import logo from "../../img/logo.png";

import "../../styles/views/Billing.scss";

export const Billing = () => {
	const { store, actions } = useContext(Context);

	let allSubTotalArray = [0];

	let cartItems = store.cartItems.map(cartItem => {
		cartItem.subTotal = cartItem.price * cartItem.units;
		allSubTotalArray.push(cartItem.subTotal);

		return (
			<tr key={cartItem.id}>
				<td>{cartItem.code}</td>
				<td>{cartItem.name}</td>
				<td>{cartItem.units}</td>
				<td>${cartItem.price}</td>
				<td>${cartItem.subTotal}</td>
			</tr>
		);
	});

	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let total = allSubTotalArray.reduce(reducer);

	return (
		<div>
			<div className="container-logo">
				<img src={logo} className="logo" />
			</div>
			<p className="header">Carrito de compras</p>
			<div className="headerinfo-container">
				<p className="header-info">Verifica y envía tu pedido a nuestro WhatsApp</p>
			</div>
			<div className="container">
				<div className="billing-container">
					<p className="head-billing">FACTURA</p>
					<div className="table-container">
						<Table bordered hover className="table-style">
							<thead>
								<tr>
									<th>Código</th>
									<th>Descripción</th>
									<th>Cantidad</th>
									<th>Total Unid.</th>
									<th>Subtotal</th>
								</tr>
							</thead>
							<tbody>
								{cartItems}
								<tr>
									<td colSpan="5" className="total-row">
										Total: ${total}
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
				<div className="container-input">
					<InputGroup className="mb-3 input-style">
						<FormControl aria-describedby="basic-addon1" className="input-text" type="text" />
						<InputGroup.Append>
							<Button variant="outline-secondary" className="input-button">
								Guardar
							</Button>
						</InputGroup.Append>
					</InputGroup>
					<InputGroup className="mb-3 input-style">
						<FormControl aria-describedby="basic-addon1" className="input-text" type="text" />
						<InputGroup.Append>
							<Button variant="outline-secondary" className="input-button">
								Guardar
							</Button>
						</InputGroup.Append>
					</InputGroup>
					<InputGroup className="mb-3 input-style">
						<FormControl aria-describedby="basic-addon1" className="input-text" type="number" />
						<InputGroup.Append>
							<Button variant="outline-secondary" className="input-button">
								Guardar
							</Button>
						</InputGroup.Append>
					</InputGroup>
				</div>
			</div>
		</div>
	);
};
