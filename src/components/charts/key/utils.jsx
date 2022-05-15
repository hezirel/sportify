import { React } from "react";
import Icons from "./Icons";

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

const Item = (data, index) => {
	return (
		<div key={index} className="charts-key-item">
			<div className="charts-key-item-icon">
				{data.icon}
			</div>	
			<span className="charts-key-item-value">{data.value}{data.unit}</span>
			<span className="charts-key-item-label">{data.name}</span>
		</div>
	);
};

const renderKey = (keysData) => {
	return (
		(Object.keys(keysData))
			.map(key => ({
				...UNITS(key),
				value: keysData[key]
			}))
	);
};

const renderList = (keyData) => {
	return (
		renderKey(keyData).map((data, index) => Item(data, index))
	);
};


export {
	renderKey,
	renderList
};