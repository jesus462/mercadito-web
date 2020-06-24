import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Table, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import { EditableCartItems } from "../component/EditableCartItems";

import logo from "../../img/logo.png";

import "../../styles/views/Billing.scss";

export const Billing = () => {
	const { store, actions } = useContext(Context);

	const [cartEdit, setCartEdit] = useState([]);

	const [edit, setEdit] = useState(false);

	let Array = ["a", "e"];

	let prueba = Array.join("").toUpperCase();
	let prueba2 = JSON.stringify(store.cartItems);
	let allSubTotalArrayWhats = [0];
	let cartItemMapped = store.cartItems.map(cartItem => {
		cartItem.subTotal = cartItem.price * cartItem.units;
		allSubTotalArrayWhats.push(cartItem.subTotal);
		return `--${cartItem.units} x ${cartItem.name.toLowerCase()}(cod: ${cartItem.code}) subtotal: $${
			cartItem.subTotal
		}--`;
	});

	const handleClickStartEdit = e => {
		setCartEdit(store.cartItems);
		setEdit(true);
	};

	const handleClickEndEdit = e => {
		setEdit(false);
		store.cartItems = cartEdit;

		//With the actions taken after this comment i actualize the counter in the navbar of the shopping cart.
		store.totalUnits = [0];
		cartEdit.forEach(cartItem => {
			store.totalUnits.push(cartItem.units);
		});
	};

	let allSubTotalArray = [0];

	let cartItems = store.cartItems.map(cartItem => {
		cartItem.subTotal = cartItem.price * cartItem.units;
		allSubTotalArray.push(cartItem.subTotal);

		return (
			<tr key={cartItem.id}>
				<td className="cell-data">{cartItem.code}</td>
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

	let WhatsApp = `https://api.whatsapp.com/send?phone=584166332231&text=` + cartItemMapped + `Total: $${total}`;

	return (
		<div>
			<div className="container-logo">
				<Link to="/Main">
					<img src={logo} className="logo" />
				</Link>
			</div>
			<p className="header-billing">Carrito de compras</p>
			<div className="headerinfo-container">
				<p className="header-info">Verifica y envía tu pedido a nuestro WhatsApp</p>
				<p className="back">
					<Link className="text" to="/Main" onClick={() => window.scrollTo(0, 0)}>
						<strong>
							<i className="fas fa-angle-left" /> Volver a Principal
						</strong>
					</Link>
				</p>
			</div>

			<div className="container">
				<div className="billing-container">
					<p className="head-billing">FACTURA</p>
					<div className="table-container">
						<Table borderless hover className="table-style">
							<thead>
								<tr>
									<th className="cell-header" style={{ display: !edit ? "none" : "table-cell" }}>
										Cantidad
									</th>
									<th className="cell-header" style={{ display: edit ? "none" : "table-cell" }}>
										Código
									</th>
									<th className="cell-header">Descripción</th>
									<th className="cell-header" style={{ display: edit ? "none" : "table-cell" }}>
										P.v.p.
									</th>
									<th className="cell-header">Subtotal</th>
								</tr>
							</thead>
							<tbody>
								{edit ? editableCartItems : cartItems}
								<tr>
									<td className="total-row" style={{ display: edit ? "none" : "table-cell" }} />
									<td className="total-row" style={{ display: edit ? "none" : "table-cell" }} />
									<td className="total-row" style={{ display: edit ? "none" : "table-cell" }} />
									<td
										colSpan="5"
										className="total-row"
										style={{ display: edit ? "none" : "table-cell" }}>
										Total: ${total}
									</td>
								</tr>
							</tbody>
						</Table>
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
							style={{ display: store.cartItems.length < 1 || !edit ? "none" : "inline" }}>
							Guardar Cambios
						</Button>
					</div>
				</div>
			</div>
			<div className="footer">
				<div className="container-whatsapp">
					<div>
						<Button className="whatsapp-button" href={WhatsApp}>
							<i className="fab fa-whatsapp icon" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
