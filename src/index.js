import React from "react";
import ReactDOM from "react-dom";

//Styles
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

//Page react
import BadgeNew from "./pages/BadgeNew";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgeNew />, container);
