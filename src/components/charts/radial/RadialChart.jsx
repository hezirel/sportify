import { React } from "react";
import { 
	ResponsiveContainer,
	RadialBarChart,
	RadialBar,
	PolarAngleAxis
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
					]}
					startAngle={90}
					endAngle={450}
					innerRadius="90%"
					outerRadius="100%"
				>
					<text 
						x={10}
						y={30}
						fill="black"
						fontWeight="bolder"
					>Score</text>
					<text fill="black" textAnchor="middle" dominantBaseline="central">
						<tspan x="50%" y="45%" fontSize="28" fontWeight="bolder">{`${score(data) * 100}%`}</tspan>
						<tspan x="50%" y="56%" fill="grey" fontSize="14">{"de votre"}</tspan>
						<tspan x="50%" y="63%" fill="grey" fontSize="14">{"objectif"}</tspan>
					</text>
					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						dataKey={"value"}
						angleAxisId={0}
						tick={false}
					/>
					<RadialBar 
						dataKey="score"
						fill="var(--clr-primary)"
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