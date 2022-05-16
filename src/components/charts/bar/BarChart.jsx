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
						tickCount="4"

					/>
					<YAxis dataKey="cal"
						orientation="left"
						yAxisId="calAxis"
						domain={[0, "auto"]} 
						hide={true}			/>
					<Tooltip payload={[]}/>
					<Legend verticalAlign="top" align="right" margin={{
						top: 0,
						right: 50,
						bottom: 10,
						left: 0
					}}
					iconType="circle"
					/>
					<Bar dataKey="kg"
						fill="black" />
					<Bar dataKey="cal"
						fill="var(--clr-primary)"
						yAxisId="calAxis"
						radius={[30, 30, 0, 0]}
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