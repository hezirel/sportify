import { 
	React, 
} from "react";
import PropTypes from "prop-types";

import { 
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer
} from "recharts";

import "./BarChart.css";

const BChart = ({ data }) => {

	const parseDay = (day) => new Date(day).getDate();

	return (
		<>
			<ResponsiveContainer>
				<BarChart data={

					data.sessions.map((item) => 
						({
							day: parseDay(item.day),
							kg: item.kilogram,
							cal: item.calories
						}))}
				barGap={8}
				barCategoryGap="30%"
				>
					<CartesianGrid
						strokeDasharray="2"
						vertical={false}

					/>
					<XAxis
						dataKey="day"
						tickLine={false}
						axisLine={false}
					/>
					<YAxis dataKey="kg"
						orientation="right"
						domain={["dataMin", "dataMax"]}
						tickCount={4}
						axisLine={false}

					/>
					<YAxis dataKey="cal"
						orientation="left"
						yAxisId="calAxis"
						domain={[0, "auto"]} 
						hide={true}
					/>

					<Legend verticalAlign="top" align="right" margin={{
						top: 0,
						right: 50,
						bottom: 10,
						left: 0
					}}
					iconType="circle"
					/>
					<Bar dataKey="kg"
						radius={[30, 30, 0, 0]}
						fill="black"
						minPointSize={15}
					/>
					<Bar dataKey="cal"
						fill="var(--clr-primary)"
						yAxisId="calAxis"
						radius={[30, 30, 0, 0]}
						minPointSize={15}
					/>
					<Tooltip
						cursor={{
							fill: "grey",
							fillOpacity: 0.4,
						}}
						content={({ payload, active }) => {
							if (active && payload ) {
								return (
									<div style={{
										background: "var(--clr-primary)",
										padding: "0.8rem 0.3rem 0.8rem 0.3rem",
									}}>
										<p style={{
											margin: 0,
											padding: 0,
											fontWeight: "bolder",
											color: "white"
										}}></p>
									</div>
								);
							}
						}}
					/>
				</BarChart>
			</ResponsiveContainer>
		</>
	);

};

BChart.propTypes = {
	data: PropTypes.object.isRequired
};

export default BChart;