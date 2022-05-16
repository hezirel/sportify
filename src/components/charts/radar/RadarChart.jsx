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
					<PolarAngleAxis 
						dataKey="name"
						tick={{ 
							fontSize: "1em",
							fontWeight: "bolder",
							fontFamily: "Menlo",
							fill: "white",
							padding: { 
								bottom: 20,
								left: 0,
								right: 0,
								top: 20
							}
						}}
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