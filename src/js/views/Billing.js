import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

import { EditableCartItems } from "../component/EditableCartItems";

import "../../styles/views/Billing.scss";

export const Billing = () => {
	const { store, actions } = useContext(Context);

	const [cartEdit, setCartEdit] = useState([]);

	const [edit, setEdit] = useState(false);

	let Array = ["a", "e"];

	let allSubTotalArrayWhats = [0];
	let cartItemMapped = store.cartItems.map(cartItem => {
		cartItem.subTotal = cartItem.price * cartItem.units;
		allSubTotalArrayWhats.push(cartItem.subTotal);
		return `-${cartItem.units} x (cod: ${cartItem.code}) subtotal: $${cartItem.subTotal}-`;
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
					<strong>{cartItem.units}</strong> x {cartItem.name.toLowerCase()}
				</td>
				<td className="cell-data">${cartItem.price}</td>
				<td className="cell-data">${cartItem.subTotal.toFixed(2)}</td>
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
					<Image cloudName="duu99bl6f" publicId="logo" className="logo" />
				</Link>
			</div>
			<p className="header-billing">Carrito de compras</p>
			<p className="back">
				<Link className="text" to="/Main" onClick={() => window.scrollTo(0, 0)}>
					<i className="fas fa-angle-left" /> Volver a Principal
				</Link>
			</p>

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
										Total: ${total.toFixed(2)}
									</td>
								</tr>
							</tbody>
						</Table>
						<Button
							variant="dark"
							className="delete-button"
							onClick={handleClickStartEdit}
							style={{ display: store.cartItems.length < 1 || edit ? "none" : "inline" }}>
							Editar Carrito
						</Button>
						<Button
							variant="dark"
							className="delete-button"
							onClick={handleClickEndEdit}
							style={{ display: store.cartItems.length < 1 || !edit ? "none" : "inline" }}>
							Guardar Cambios
						</Button>
					</div>
				</div>
			</div>
			<div className="footer">
				<p className="header-info">
					Envíanos tu pedido <i className="fas fa-arrow-right" />
					<Button className="whatsapp-button" href={WhatsApp}>
						<i className="fab fa-whatsapp icon" />
					</Button>
				</p>
			</div>
		</div>
	);
};
