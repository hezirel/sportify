import { React } from "react";
import PropTypes from "prop-types";

import "./Charts.css";

import BarChart from "./bar/BarChart";
import RadarChart from "./radar/RadarChart";
import RadialChart from "./radial/RadialChart";
import KeyChart from "./key/KeyChart";
import LineChart from "./line/LineChart";
import ChartWraper from "../../js/ChartWrapper";

const Charts = ({ id }) => {

	return (
		<>
			<div className="charts-bar" id="chart-bar">
				<ChartWraper uri={`${id}/activity`} Display={BarChart} />
			</div>
			<div className="charts-line">
				<ChartWraper uri={`${id}/average-sessions`} Display={LineChart} />
			</div>   
			<div className="charts-radar">
				<ChartWraper uri={`${id}/performance`} Display={RadarChart} />
			</div>   
			<div className="charts-radial">
				<ChartWraper uri={`${id}`} Display={RadialChart} />
			</div>   
			<div className="charts-keys">
				<ChartWraper uri={`${id}`} Display={KeyChart} />
			</div>
		</>
	);
};

Charts.propTypes = {
	id: PropTypes.number.isRequired
};

export default Charts;
