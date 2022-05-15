import { React } from "react";

import {
	ResponsiveContainer,
	LineChart,
	Line,
	Tooltip,
} from "recharts";
import PropTypes from "prop-types";


import "./LineChart.css";


const LinChart = ({ data }) => {

	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data.sessions}
				>
					<Line
						dataKey="sessionLength"
						fill="red"
						strokeWidth={2}
						activeDot={{
							stroke: "red",
							strokeWidth: 10,
							r: 5,
						}}
					/>
					<Tooltip
						cursor={{
							stroke: "rgba(0, 0, 0, 0.1)",
							strokeWidth: 32,
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</>
	);

};

LinChart.propTypes = {
	data: PropTypes.object.isRequired
};

export default LinChart;