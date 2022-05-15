import { React } from "react";

import PropTypes from "prop-types";

import useFetch from "../../../js/useFetch";
import Loader from "../Loader";
import Icons from "../../../assets/icons/Icons";
import "./KeyChart.css";

const UNITS = [{
	name: "Calories",
	unit: "kCal",
	icon: <Icons.cal />
},
{
	name: "Protein",
	unit: "g",
	icon: <Icons.pro />
},
{
	name: "Carbohydrates",
	unit: "g",
	icon: <Icons.carb />
},
{
	name: "Lipids",
	unit: "g",
	icon: <Icons.fat />
}];

const translate = (key) => {
	return ({
		"calorieCount": "Calories",
		"proteinCount": "Protein",
		"carbohydrateCount": "Carbohydrates",
		"lipidCount": "Lipids",
	})[key];
};

const Item = (data, index) => {
	return (
		<div key={index} className="charts-key-item">
			<div className="charts-key-item-icon">
				{data.icon}
			</div>	
			<span className="charts-key-item-value">{data.value}{data.unit}</span>
			<span className="charts-key-item-name">{data.name}</span>
		</div>
	);
};

const KeyChart = ({ id }) => {

	const { data, loading, error} = useFetch(`${id}`);

	const renderKey = (keysData) => {
		return (
			Object.keys(keysData)
				.map(key => ({
					...UNITS.find(e => e.name === translate(key)),
					value: keysData[key]
				}))
		);
	};
	
	const renderList = (keyList) => {
		console.log(keyList.map(e => e));
		return (
			keyList.map((data, index) => Item(data, index))
		);
	};

	return (
		<>
			{(loading || error )&& <Loader ld={loading} err={error}/>}

			{data &&
					<>
						{renderList(renderKey(data.keyData))}
					</>
			}
		</>
	);

};

KeyChart.propTypes = {
	id: PropTypes.number.isRequired
};

export default KeyChart;