import { 
	React
} from "react";

import PropTypes from "prop-types";

import BarChart from "./bar/BarChart";
import RadarChart from "./radar/RadarChart";
import RadialChart from "./radial/RadialChart";
import KeyChart from "./key/KeyChart";
import LineChart from "./line/LineChart";
import ChartWraper from "../../js/ChartWrapper";


/**
 * @constant chartList - List of charts to display and corresponding parameters
 */
const chartList = [
	{
		chart: BarChart,
		uri: "/activity",
		css: "Bar",
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

/**
 * Map over chartList, returns all charts components with corresponding props
 * 	encapulated in a ChartWrapper component to handle async fetching
 * @component
 * @type {React.FunctionComponent}
 * @param  {number} id - The id of the user for which to retrieve data
 * @return {React.ReactElement}
 */
const Charts = ({ id }) => {

	return (
		chartList.map(({ chart, uri, css }, index) => {
			return (
				<div key={index} className={`charts${css}`} id={`chart${css}`}>
					<ChartWraper uri={`${id}${uri}`} Display={chart} id={id}/>
				</div>
			);
		})
	);
};

Charts.propTypes = {
	id: PropTypes.number.isRequired
};

export default Charts;
