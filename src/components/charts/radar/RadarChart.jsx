import { React } from "react";
import { 
	ResponsiveContainer,
	RadarChart as RadChart,
	PolarAngleAxis,
	Radar,
	PolarGrid
} from "recharts";

import PropTypes from "prop-types";

import "./RadarChart.css";

const RadarChart = ({ data }) => {

	return (
		<>
			<ResponsiveContainer width="100%" height="100%">

				<RadChart data={
					data.data.map((item) => 
						({
							name: data.kind[item.kind],
							value: item.value
						}))
				}>

					<PolarGrid />
					<PolarAngleAxis dataKey="name" />
					<Radar dataKey="value" fill="var(--clr-primary)" />

				</RadChart>
			</ResponsiveContainer>
		</>
	);

};

RadarChart.propTypes = {
	data: PropTypes.object.isRequired
};

export default RadarChart;