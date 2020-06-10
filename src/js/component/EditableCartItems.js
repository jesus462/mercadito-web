import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";
import PropTypes from "prop-types";
import { Button, InputGroup, FormControl } from "react-bootstrap";

import "../../styles/component/EditableCartItems.scss";

export const EditableCartItems = ({ cartEditItem, setCartEdit, cartEdit }) => {
	const { store, actions } = useContext(Context);

	const [unit, setUnit] = useState(cartEditItem.units);

	const handleClickPlusItem = () => {
		setUnit((cartEditItem.units = unit + 1));
	};

	const handleClickMinusItem = () => {
		if (unit >= 2) {
			setUnit((cartEditItem.units = unit - 1));
		} else {
			setUnit(unit - 0);
		}
	};

	const handleClickDeleteItem = () => {
		let filteredCartEdit = cartEdit.filter(filteredItem => {
			return filteredItem.code !== cartEditItem.code;
		});

		setCartEdit(filteredCartEdit);
	};

	return (
		<tr className="full-row">
			<td className="full-input">
				<InputGroup className="mb-3 input-style-edit">
					<Button variant="outline-secondary" className="input-button" onClick={handleClickMinusItem}>
						-
					</Button>
					<FormControl
						aria-describedby="basic-addon1"
						type="number"
						min="1"
						className="input-text"
						value={unit}
					/>
					<Button variant="outline-secondary" className="input-button" onClick={handleClickPlusItem}>
						+
					</Button>
				</InputGroup>
			</td>
			<td className="tdata">{cartEditItem.name}</td>
			<td className="tdata">${unit * cartEditItem.price}</td>
			<td className="cell-delete">
				<Button className="delete" variant="danger" onClick={handleClickDeleteItem}>
					x
				</Button>
			</td>
		</tr>
	);
};

EditableCartItems.propTypes = {
	cartEditItem: PropTypes.object,
	setCartEdit: PropTypes.func,
	cartEdit: PropTypes.array
};
