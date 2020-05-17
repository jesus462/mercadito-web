import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";

import { NavBar } from "../component/NavBar";

export const InDemandItems = () => {
	return (
		<div>
			<NavBar />
			<h1>Items In Demand</h1>
		</div>
	);
};
