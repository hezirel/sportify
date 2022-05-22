import { 
	React
} from "react";

import "./SideBar.css";

import activities from "./activitiesList";

/**
 * Construct SideBar HTML component
 * @returns {React.ReactElement} - TopBar HTML component
 */
const SideBar = () => {

	return (
		<aside className="side-bar">
			{activities.map((item, index) => 
				<li className="activities-list-items" key={index}>
					{item}
				</li>
			)}
		</aside>
	);

};

export default SideBar;