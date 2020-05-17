import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";

import { NavBar } from "../component/NavBar";

export const CleaningItems = () => {
	return (
		<div>
			<NavBar />
			<h1>Cleaning Items</h1>
		</div>
	);
};
