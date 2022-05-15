import "./App.css";
import { React } from "react";
import TopBar from "./components/sidebar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Dashboard from "./dashboard/Dashboard";
import ChartWrapper from "../js/ChartWrapper";

let path = window.location.pathname;

//#:match params
const id = parseInt(path.substring(path.lastIndexOf("/") + 1)) || 12;

function App() {


	return (
		<div className="app">
			<TopBar />
			<SideBar />
			<div className="app-content">
				<ChartWrapper uri={`${id}`} Display={Dashboard} />
			</div>
		</div>
	);
}

export default App;
