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

import useFetch from "../../../js/useFetch";
import Loader from "../Loader";
import "./BarChart.css";

const BChart = ({ id }) => {

	const { data, loading, error} = useFetch(`${id}/activity`);

	const parseDay = (day) => new Date(day).getDate();

	return (
		<>
			{(loading || error )&& <Loader ld={loading} err={error}/>}

			{data && (
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={

						data.sessions.map((item) => 
							({
								day: parseDay(item.day),
								kg: item.kilogram,
								cal: item.calories
							}))} 
					>
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
			)}
		</>
	);

};

BChart.propTypes = {
	id: PropTypes.number.isRequired
};

export default BChart;