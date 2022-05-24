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
		<div className="sideBar">
			{activities.map((Item, index) => 
				<li className="activities-list-items" key={index}>
					{<Item/>}
				</li>
			)}
		</div>
	);

};

export default SideBar;