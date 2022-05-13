import { React, useEffect, useState } from "react";
import { 
	ResponsiveContainer,
	RadarChart,
	PolarAngleAxis,
	PolarRadiusAxis,
	Radar,
	Legend,
	PolarGrid
} from "recharts";
import PropTypes from "prop-types";

const Chart = ({ payload }) => {

	const [data, setData] = useState({});
	
	useEffect(() => {

		setData((payload.val).map((item) => 
			({
				name: payload.label[item.kind],
				value: item.value,
			})));

	}, [payload]);

	return payload !== {} ? (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="name" />
					<PolarRadiusAxis />
					<Radar dataKey="value" fill="var(--clr-primary)" />
					<Legend/>
				</RadarChart>
			</ResponsiveContainer>
		</>
	) : <div></div>;

};

Chart.propTypes = {
	payload: PropTypes.object
};

export default Chart;