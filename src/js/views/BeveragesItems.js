import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";

import { NavBar } from "../component/NavBar";

export const BeveragesItems = () => {
	return (
		<div>
			<NavBar />
			<h1>Beverages Items</h1>
		</div>
	);
};
