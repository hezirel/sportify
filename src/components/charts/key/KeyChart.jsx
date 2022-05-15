import { React } from "react";

import PropTypes from "prop-types";

import {
	renderList,
} from "./utils";

import "./KeyChart.css";


const KeyChart = ({ data }) => {


	return (
		<>
			{renderList((data.keyData))}
		</>
	);

};

KeyChart.propTypes = {
	data: PropTypes.object.isRequired
};

export default KeyChart;