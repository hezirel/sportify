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
			uri: `${id}/activity`,
			css: "Bar"
		},
		{
			chart: LineChart,
			uri: `${id}/average-sessions`,
			css: "Line"
		},
		{
			chart: RadarChart,
			uri: `${id}/performance`,
			css: "Radar"
		},
		{
			chart: RadialChart,
			uri: `${id}`,
			css: "Radial"
		},
		{
			chart: KeyChart,
			uri: `${id}`,
			css: "Key"
		},	
	];
	return (
		chartList.map(({ chart, uri, css }, index) => {
			return (
				<div key={index} className={`charts${css}`} id={`chart${css}`}>
					<ChartWraper uri={`${uri}`} Display={chart} />
				</div>
			);
		})
	);
};

Charts.propTypes = {
	id: PropTypes.number.isRequired
};

export default Charts;
