import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";

import { NavBar } from "../component/NavBar";

export const SnacksItems = () => {
	return (
		<div>
			<NavBar />
			<h1>Snacks Items</h1>
		</div>
	);
};
