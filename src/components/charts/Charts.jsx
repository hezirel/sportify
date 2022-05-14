import { React } from "react";
import PropTypes from "prop-types";

import "./Charts.css";

import BarChart from "./bar/BarChart";
import RadarChart from "./radar/RadarChart";
import RadialChart from "./radial/RadialChart";

const Charts = ({ id }) => {

	return (
		<>
			<div className="charts-bar" id="chart-bar">
				<BarChart id={id} />
			</div>
			<div className="charts-line">
			</div>   
			<div className="charts-radar">
				<RadarChart id={id} />
			</div>   
			<div className="charts-radial">
				<RadialChart id={id} />
			</div>   
			<div className="charts-keys"></div>
		</>
	);
};

Charts.propTypes = {
	id: PropTypes.number.isRequired
};

export default Charts;
