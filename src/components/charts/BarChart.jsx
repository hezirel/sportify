import { React, useEffect } from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./BarChart.css";

const Chart = ({ payload }) => {
	
	useEffect(() => {
		console.log(payload);
	}, [payload]);

	return (
		<>
			<ResponsiveContainer>

				<BarChart
					data={payload} >
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
					<YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
					<Tooltip />
					<Legend />
					<Bar yAxisId="left" dataKey="calories" fill="#8884d8" />
					<Bar yAxisId="right" dataKey="kilogram" fill="#82ca9d" />

				</BarChart>

			</ResponsiveContainer>
		</>
	);

};

Chart.propTypes = {
	payload: PropTypes.array.isRequired
};

export default Chart;