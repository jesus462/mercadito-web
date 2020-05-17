import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";

import { NavBar } from "../component/NavBar";

export const HygieneItems = () => {
	return (
		<div>
			<NavBar />
			<h1>Hygiene Items</h1>
		</div>
	);
};
