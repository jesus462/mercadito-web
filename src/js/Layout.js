import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/Home";
import { Main } from "./views/Main";
import { BeveragesItems } from "./views/BeveragesItems";
import { FoodItems } from "./views/FoodItems";
import { HygieneItems } from "./views/HygieneItems";
import { InDemandItems } from "./views/InDemandItems";
import { SnacksItems } from "./views/SnacksItems";
import { CleaningItems } from "./views/CleaningItems";
import injectContext from "./store/Context";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Main" component={Main} />
					<Route exact path="/Main/Populares" component={InDemandItems} />
					<Route exact path="/Main/Snacks" component={SnacksItems} />
					<Route exact path="/Main/Alimentos" component={FoodItems} />
					<Route exact path="/Main/Bebidas" component={BeveragesItems} />
					<Route exact path="/Main/Limpieza" component={CleaningItems} />
					<Route exact path="/Main/Higiene" component={HygieneItems} />
					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
