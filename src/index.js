import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";


let search = new URLSearchParams(window.location.search);
const id = search.has("id") ? parseInt(search.get("id")) : 12;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<App id={id}/>
	</React.StrictMode>
);