import logo from "../../assets/logo.png";
import "./TopBar.css";
import React from "react";
import list from "./MenuList";


const TopBar = () => {

	return (
		<header className="top-bar">
			<img src={logo} alt="logo" className="logo" />
			{list.map((item, index) => 
				<li className="menu-list-items" key={index}>
					{item}
				</li>
			)}
		</header>
	);

};

export default TopBar;