import { 
	React
} from "react";

import Icons from "./Icons";

/**
 * Translate key name to Icons and units corresponding to it
 * @param  {string} key - Key data name
 * @requires Icons
 * @returns {string, string, {React.ReactElement}} - Name, unit, and Icon svg component
 */
const UNITS = (key) => {
	return ({
		"calorieCount": {
			name: "Calories",
			unit: "kCal",
			icon: <Icons.cal />
		},
		"proteinCount": {
			name: "Protein",
			unit: "g",
			icon: <Icons.pro />
		},
		"carbohydrateCount": {
			name: "Carbohydrates",
			unit: "g",
			icon: <Icons.carb />
		},
		"lipidCount": {
			name: "Lipids",
			unit: "g",
			icon: <Icons.fat />
		}
	})[key];
};

/**
 * Construct Item HTML component from given data and index
 * @param  {object} data - Key units and value
 * @param  {number} index - Index of data in array, used for React key
 */
const Item = (data, index) => {
	return (
		<li key={index} className="charts-key-item">
			<div className="charts-key-item-icon">
				{data.icon}
			</div>	
			<span className="charts-key-item-value">{data.value}{data.unit}</span>
			<span className="charts-key-item-label">{data.name}</span>
		</li>
	);
};

/**
 * Construct array of object containing UNITS defined properties and value from data
 * @param  {object} keysData - Data received from API
 * @returns {Array} - Array of object UNITS with corresponding value filled from param data
 */
const renderKey = (keysData) => {
	return (
		(Object.keys(keysData))
			.map(key => ({
				...UNITS(key),
				value: keysData[key]
			}))
	);
};

/**
 * Construct objects array from data
 * map over it and return Item component
 * @type {Function}
 * @param  {object} keyData - Data received from API, key/value pairs
 * @returns {React.ReactElement}
 */
const renderList = (keyData) => {
	return (
		[...renderKey(keyData)].map((data, index) => Item(data, index))
	);
};


export {
	renderKey,
	renderList
};