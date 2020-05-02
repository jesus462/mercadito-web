import React, { Component, useState, useEffect, useContext } from "react";
import { Context } from "../store/Context";

import { NavBar } from "../component/NavBar";

import "../../styles/views/Main.scss";

export const Main = () => {
	return (
		<div>
			<NavBar />
			<h1>Main</h1>
		</div>
	);
};
