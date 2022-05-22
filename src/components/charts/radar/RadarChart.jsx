import { 
	React
} from "react";

import PropTypes from "prop-types";

import "./RadarChart.css";

import { 
	ResponsiveContainer,
	RadarChart as RadChart,
	PolarAngleAxis,
	Radar,
	PolarGrid,
} from "recharts";

/**
 * Radar chart component
 * Transform api Data to display them in chart
 * @param  {object} {data} - Data received from API
 * @returns {React.ReactElement}
 */
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
						textAnchor="middle"
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