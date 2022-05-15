import { React } from "react";
import { 
	ResponsiveContainer,
	RadialBarChart,
	RadialBar,
} from "recharts";

import PropTypes from "prop-types";

const RadialChart = ({ data }) => {

	const score = data => data.score || data.todayScore;

	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					data={[
						{score: (score(data)*100)},
						{score: 100}
					]}
					startAngle={90}
					endAngle={450}
					innerRadius="70%"
					outerRadius="100%"
				>

					<RadialBar 
						dataKey="score"
						fill="red"
						label={{
							position: "center",
							fill: "black",
							fontSize: "3vh",
							children: `${score(data)*100}%`,
						}}
					>
					</RadialBar>
				</RadialBarChart>
			</ResponsiveContainer>
		</>
	);

};

RadialChart.propTypes = {
	data: PropTypes.object.isRequired
};

export default RadialChart;