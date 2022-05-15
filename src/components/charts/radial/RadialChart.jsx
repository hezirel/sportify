import { React } from "react";
import { 
	ResponsiveContainer,
	RadialBarChart,
	RadialBar,
} from "recharts";

import PropTypes from "prop-types";
import "./RadialChart.css";

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
					<text fill="black" textAnchor="middle" dominantBaseline="central">
						<tspan x="50%" y="45%" fontSize="28" fontWeight="bolder">{`${score(data) * 100}%`}</tspan>
						<tspan x="50%" y="56%" fill="grey" fontSize="14">{"de votre"}</tspan>
						<tspan x="50%" y="63%" fill="grey" fontSize="14">{"objectif"}</tspan>
					</text>
					<RadialBar 
						dataKey="score"
						fill="var(--clr-primary)">
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