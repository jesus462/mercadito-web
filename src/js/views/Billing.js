import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import { Button, Table, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../../img/logo.png";

import "../../styles/views/Billing.scss";

export const Billing = () => {
	const { store, actions } = useContext(Context);

	const [show, setShow] = useState(true);

	const [deliveryInfo, setDeliveryInfo] = useState([]);
	const [info, setInfo] = useState({
		name: "",
		direction: "",
		phone: ""
	});

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

	let deliveryInfoMap = deliveryInfo.map(infoMap => {
		return (
			<tfoot key={infoMap.id}>
				<tr>
					<th scope="row" className="cell-header">
						Nombre:
					</th>
					<td colSpan="4" className="cell-data">
						{infoMap.name}
					</td>
				</tr>
				<tr>
					<th scope="row" className="cell-header">
						Dirección:
					</th>
					<td colSpan="4" className="cell-data">
						{infoMap.direction}
					</td>
				</tr>
				<tr>
					<th scope="row" className="cell-header">
						Teléfono:
					</th>
					<td colSpan="4" className="cell-data">
						{infoMap.phone}
					</td>
				</tr>
			</tfoot>
		);
	});

	const handleChangeInfo = e => {
		setInfo({
			...info /*esto hace una copia del estado y va agregando y guardando, agregando ...*/,
			[e.target.name]: e.target.value
		});
	};

	const handleClickAdding = () => {
		deliveryInfo.push(info);
		setShow(false);
	};

	const handleClickCorrection = () => {
		setInfo({
			name: "",
			direction: "",
			phone: ""
		});
		setDeliveryInfo([]);
		setShow(true);
	};

	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let total = allSubTotalArray.reduce(reducer);

	return (
		<div>
			<div className="container-logo">
				<Link to="/Main">
					<img src={logo} className="logo" />
				</Link>
			</div>
			<p className="header-billing">Carrito de compras</p>
			<p className="back">
				<Link className="text" to="/Main" onClick={() => window.scrollTo(0, 0)}>
					<i className="fas fa-undo-alt" /> Volver a Principal
				</Link>
			</p>
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
									<th className="cell-header">Código</th>
									<th className="cell-header">Descripción</th>
									<th className="cell-header">P.v.p.</th>
									<th className="cell-header">Subtotal</th>
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
							{deliveryInfoMap}
						</Table>
					</div>
				</div>
				<div className="container-input">
					<InputGroup className="mb-3 input-style" style={{ display: !show ? "none" : "inline" }}>
						<FormControl
							aria-describedby="basic-addon1"
							className="input-text"
							type="text"
							value={info.name}
							placeholder="Ingrese su nombre"
							name="name"
							onChange={handleChangeInfo}
						/>
					</InputGroup>
					<InputGroup className="mb-3 input-style" style={{ display: !show ? "none" : "inline" }}>
						<FormControl
							aria-describedby="basic-addon1"
							className="input-text"
							type="text"
							value={info.direction}
							placeholder="Ingrese la dirección de envío"
							name="direction"
							onChange={handleChangeInfo}
						/>
					</InputGroup>
					<InputGroup className="mb-3 input-style" style={{ display: !show ? "none" : "inline" }}>
						<FormControl
							aria-describedby="basic-addon1"
							className="input-text"
							type="number"
							value={info.phone}
							placeholder="Ingrese su teléfono"
							name="phone"
							onChange={handleChangeInfo}
						/>
					</InputGroup>
					<Button
						variant="dark"
						className="inputs-button"
						style={{ display: !show ? "none" : "inline" }}
						onClick={handleClickAdding}>
						Agregar a factura
					</Button>
					<p style={{ display: show ? "none" : "inline" }} className="correction-info">
						Verifica tus datos si hay algún error presiona el botón corregir
					</p>
					<Button
						variant="dark"
						className="inputs-button"
						style={{ display: show ? "none" : "inline" }}
						onClick={handleClickCorrection}>
						Corregir
					</Button>
				</div>
			</div>
			<div className="footer">
				<div className="container-whatsapp">
					<div>
						<Link to="/Thanks">
							<Button className="whatsapp-button">
								<i className="fab fa-whatsapp icon" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
