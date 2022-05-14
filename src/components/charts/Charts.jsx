import { React } from "react";
import PropTypes from "prop-types";

import "./Charts.css";

import BarChart from "./bar/BarChart";
import RadChart from "./radar/RadChart";

const Charts = ({ id }) => {

	return (
		<>
			<div className="charts-bar" id="chart-bar">
				<BarChart id={id} />
			</div>
			<div className="charts-line">
			</div>   
			<div className="charts-radar">
				<RadChart id={id} />
			</div>   
			<div className="charts-radial"></div>   
			<div className="charts-keys"></div>
		</>
	);
};

Charts.propTypes = {
	id: PropTypes.number.isRequired
};

export default Charts;
