import "./App.css";
import { React } from "react";
import TopBar from "./components/sidebar/TopBar";
import SideBar from "./components/sidebar/SideBar";

function App() {
	return (
		<div className="app">
			<TopBar />
			<SideBar />
			<div className="dashboard-container">Dasboard</div>
		</div>
	);
}

export default App;
