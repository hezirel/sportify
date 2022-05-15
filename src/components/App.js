import "./App.css";
import { React } from "react";
import TopBar from "./sidebar/TopBar";
import SideBar from "./sidebar/SideBar";
import Dashboard from "./dashboard/Dashboard";

let path = window.location.pathname;

//#:match params
const id = parseInt(path.substring(path.lastIndexOf("/") + 1)) || 12;

function App() {


	return (
		<div className="app">
			<TopBar />
			<SideBar />
			<div className="app-content">
				<Dashboard id={id}/>
			</div>
		</div>
	);
}

export default App;
