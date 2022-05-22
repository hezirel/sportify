import { 
	React
} from "react";

import PropTypes from "prop-types";

import "./App.css";

import TopBar from "./sidebar/TopBar";
import SideBar from "./sidebar/SideBar";
import Dashboard from "./dashboard/Dashboard";

/**
 * Application main entry point, does basic UI layout
 * @component
 * @type {React.FunctionComponent}
 * @param  {number} id - The id of the user for which to retrieve data
 * @returns {React.ReactElement}
 */
const App = ({ id }) => {
	return (
		<div className="app">
			<TopBar />
			<SideBar />
			<div className="app-content">
				<Dashboard id={id}/>
			</div>
		</div>
	);
};

App.propTypes = {
	/**
	 * User's ID
	 */
	id: PropTypes.number.isRequired
};

export default App;
