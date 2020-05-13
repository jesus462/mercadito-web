import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import PropTypes from "prop-types";
import { Modal, Button, Table } from "react-bootstrap";

import "../../styles/component/ShoppingCartModal.scss";

export const ShoppingCartModal = ({ handleClose, show }) => {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Carrito de Compras</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Table bordered hover>
					<tbody />
				</Table>
			</Modal.Body>
			<Modal.Footer>
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
