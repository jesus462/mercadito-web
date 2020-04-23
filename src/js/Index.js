//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

//include your index.scss file into the bundle
import "../styles/Index.scss";

//import your own components
import Layout from "./Layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
