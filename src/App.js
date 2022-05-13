import "./App.css";
import { React } from "react";
import TopBar from "./components/sidebar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {

	let path = window.location.pathname;
	const id = parseInt(path.substring(path.lastIndexOf("/") + 1)) || 12;

	return (
		<div className="app">
			<TopBar />
			<SideBar />
			<div className="app-content">

				<Dashboard id={id} />

			</div>
		</div>
	);
}

export default App;
