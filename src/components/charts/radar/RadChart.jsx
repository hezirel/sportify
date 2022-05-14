import { React, useEffect, useState } from "react";
import { 
	ResponsiveContainer,
	RadarChart,
	PolarAngleAxis,
	Radar,
	PolarGrid
} from "recharts";
import PropTypes from "prop-types";

const RadChart = ({ payload }) => {

	const [data, setData] = useState(false);

	useEffect(() => {
		payload ? setData((payload.data).map((item) => 
			({
				name: payload.kind[item.kind],
				value: item.value,
			}))) : false;
	}, [payload]);

	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				{data ? (<RadarChart data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="name" />
					<Radar dataKey="value" fill="var(--clr-primary)" />
				</RadarChart>) : <div>test</div>}
			</ResponsiveContainer>
		</>
	);

};

RadChart.propTypes = {
	payload: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default RadChart;