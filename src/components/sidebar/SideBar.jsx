import "./SideBar.css";
import React from "react";
import activities from "./activitiesList";

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