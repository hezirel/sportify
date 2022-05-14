import { React } from "react";
import { 
	ResponsiveContainer,
} from "recharts";

import PropTypes from "prop-types";

import useFetch from "../../../js/useFetch";
import Loader from "../Loader";
import "./KeyChart.css";

const UNITS = [{
	name: "Calories",
	unit: "kCal",
	icon: "fas fa-fire",
},
{
	name: "Protein",
	unit: "g",
	icon: "fas fa-chicken",
},
{
	name: "Carbohydrates",
	unit: "g",
	icon: "fas fa-apple",
},
{
	name: "Lipids",
	unit: "g",
	icon: "fas fa-hambuer",
}];

const translate = (key) => {
	return ({
		"calorieCount": "Calories",
		"proteinCount": "Protein",
		"carbohydrateCount": "Carbohydrates",
		"lipidCount": "Lipids",
	})[key];
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
			keyList.map((elt, index) => {
				return (
					<li key={index}>{elt.name}</li>
				);
			})
		);
	};

	return (
		<>
			{(loading || error )&& <Loader ld={loading} err={error}/>}

			{data &&
				<ResponsiveContainer width="100%" height="100%">
					<ul>
						{renderList(renderKey(data.keyData))}
					</ul>
				</ResponsiveContainer>
			}
		</>
	);

};

KeyChart.propTypes = {
	id: PropTypes.number.isRequired
};

export default KeyChart;