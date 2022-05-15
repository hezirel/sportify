import { React } from "react";
import PropTypes from "prop-types";

import BarChart from "./bar/BarChart";
import RadarChart from "./radar/RadarChart";
import RadialChart from "./radial/RadialChart";
import KeyChart from "./key/KeyChart";
import LineChart from "./line/LineChart";
import ChartWraper from "../../js/ChartWrapper";

const Charts = ({ id }) => {

	const chartList = [
		{
			chart: BarChart,
			uri: "/activity",
			css: "Bar"
		},
		{
			chart: LineChart,
			uri: "/average-sessions",
			css: "Line"
		},
		{
			chart: RadarChart,
			uri: "/performance",
			css: "Radar"
		},
		{
			chart: RadialChart,
			uri: "/",
			css: "Radial"
		},
		{
			chart: KeyChart,
			uri: "/",
			css: "Key"
		},	
	];
	return (
		chartList.map(({ chart, uri, css }, index) => {
			return (
				<div key={index} className={`charts${css}`} id={`chart${css}`}>
					<ChartWraper uri={`${id}${uri}`} Display={chart} />
				</div>
			);
		})
	);
};

Charts.propTypes = {
	id: PropTypes.number.isRequired
};

export default Charts;
