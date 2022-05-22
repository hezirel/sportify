import { 
	React
} from "react";

import PropTypes from "prop-types";

import "./KeyChart.css";

import {
	renderList,
} from "./utils";



/**
 * Key data chart component
 * Transform api Data to display them in chart
 * @param  {object} {data} - Data received from API
 * @requires renderList
 * @returns {React.ReactElement}
 */
const KeyChart = ({ data: {keyData: data} }) => {

	return (
		<>
			{renderList(data)}
		</>
	);

};

KeyChart.propTypes = {
	data: PropTypes.object.isRequired
};

export default KeyChart;