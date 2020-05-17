import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";

import { NavBar } from "../component/NavBar";

export const FoodItems = () => {
	return (
		<div>
			<NavBar />
			<h1>Food Items</h1>
		</div>
	);
};
