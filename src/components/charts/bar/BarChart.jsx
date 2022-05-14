import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./BarChart.css";

const BChart = ({ payload }) => {

	const [data, setData] = useState([]);
	const parseDay = (day) => new Date(day).getDate();
	
	useEffect(() => {

		setData(payload.map((item) => 
			({
				day: parseDay(item.day),
				kg: item.kilogram,
				cal: item.calories
			})));

	}, [payload]);

	return data.length ? (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data}>
					<CartesianGrid strokeDasharray="2" vertical={false}

					/>
					<XAxis dataKey="day" />
					<YAxis dataKey="kg" orientation="right" />
					<Tooltip payload={[]}/>
					<Legend verticalAlign="top" align="right" margin={{
						top: 0,
						right: 50,
						bottom: 10,
						left: 0
					}}
					iconType="circle"
					/>
					<Bar dataKey="kg" fill="black" />
					<Bar dataKey="cal" fill="var(--clr-primary)" />
				</BarChart>
			</ResponsiveContainer>
		</>
	) : <></>;

};

BChart.propTypes = {
	payload: PropTypes.array.isRequired
};

export default BChart;