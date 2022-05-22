import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";


let path = window.location.pathname;
const id = parseInt(path.substring(path.lastIndexOf("/") + 1)) || 12;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<App id={id}/>
	</React.StrictMode>
);