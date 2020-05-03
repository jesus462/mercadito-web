import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";

import { NavBar } from "../component/NavBar";
import { ItemCard } from "../component/ItemCard";

import "../../styles/views/Main.scss";

export const Main = () => {
	return (
		<div>
			<NavBar />
			<p className="header">ELIGE LOS PRODUCTOS DE TU PREFERENCIA</p>
			<div>
				<ItemCard />
			</div>
		</div>
	);
};
