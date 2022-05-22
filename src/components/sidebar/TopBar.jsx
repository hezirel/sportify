import { 
	React
} from "react";

import "./TopBar.css";

import list from "./MenuList";
import logo from "../../assets/logo.png";

/**
 * Construct TopBar HTML component
 * @returns {React.ReactElement} - TopBar HTML component
 */
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