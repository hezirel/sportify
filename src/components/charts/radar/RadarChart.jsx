import { React } from "react";
import { 
	ResponsiveContainer,
	RadarChart as RadChart,
	PolarAngleAxis,
	Radar,
	PolarGrid,
} from "recharts";

import PropTypes from "prop-types";

import "./RadarChart.css";

const RadarChart = ({ data }) => {

	return (
		<>
			<ResponsiveContainer >

				<RadChart data={
					data.data.map((item) => 
						({
							name: data.kind[item.kind],
							value: item.value
						}))}
				>

					<PolarGrid 
					/>
					<PolarAngleAxis 
						dataKey="name"
					/>
					<Radar
						name="Radar"			
						dataKey="value" 
						fill="var(--clr-primary)"
						fillOpacity="0.6"
					/>

				</RadChart>
			</ResponsiveContainer>
		</>
	);

};

RadarChart.propTypes = {
	data: PropTypes.object.isRequired
};

export default RadarChart;