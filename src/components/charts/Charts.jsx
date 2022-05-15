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
				<LineChart id={id} />
			</div>   
			<div className="charts-radar">
				<RadarChart id={id} />
			</div>   
			<div className="charts-radial">
				<RadialChart id={id} />
			</div>   
			<div className="charts-keys">
				<KeyChart id={id} />
			</div>
		</>
	);
};

Charts.propTypes = {
	id: PropTypes.number.isRequired
};

export default Charts;
