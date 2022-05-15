import { React } from "react";

import {
	ResponsiveContainer,
	LineChart,
	Line,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import PropTypes from "prop-types";


import "./LineChart.css";


const LinChart = ({ data }) => {

	const dayTranslate = (day) => {
		return ({
			"1": "M",
			"2": "T",
			"3": "W",
			"4": "T",
			"5": "F",
			"6": "S",
			"7": "S",
		})[day];
	};

	return (
		<>
			<ResponsiveContainer 
				width="100%" 
				height="100%" 
				minHeight="30vh"
				className="linChartResponsiveContainer"
			>
				<LineChart
					data={data.sessions}
					fill="var(--clr-primary)"
					margin={{
						top: 40,
						bottom: 5
					}}
				>
					<text x={0} y={0}>LineChart</text>
					<XAxis
						dataKey="day"
						tickLine={false}
						axisLine={false}
						padding={{ left: 10, right: 10, top: 20, bottom: 30 }}
						tick={{ 
							fontSize: "1.2rem",
							fontWeight: "bolder",
							fontFamily: "Menlo",
							fill: "white",
							padding: { 
								bottom: 20,
								left: 0,
								right: 0,
								top: 20
							},
							margin: {
								left: 10,
							},
						}}
						tickFormatter={(tick) => `${dayTranslate(tick)}`}
					/>
					<YAxis 
						dataKey="sessionLength"
						hide={true}
					/>
					<Line
						dataKey="sessionLength"
						stroke="white"
						type="natural"
						strokeWidth={4}
						activeDot={{
							stroke: "white",
							strokeWidth: 5,
							r: 3,
						}}
						dot={{
							stroke: "white",
							strokeWidth: 1,
							r: 1,
						}}
						name="Session Length"
						unit="min"
					/>
					<Tooltip
						cursor={{
							stroke: "rgba(0, 0, 0, 0.1)",
							strokeWidth: 32,
						}}
						content={({ payload, active }) => {
							if (active && payload && payload.length) {
								return (
									<div style={{
										background: "white",
										padding: "0.8rem 0.3rem 0.8rem 0.3rem",

									}}>
										<p style={{
											margin: 0,
											padding: 0,
											fontWeight: "bolder",
										}}>{payload[0].value + payload[0].unit}</p>
									</div>
								);
							}
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