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
			<ResponsiveContainer width="100%">
				<RadialBarChart
					data={[
						{score: (score(data)*100)},
					]}
					startAngle={90}
					endAngle={450}
					innerRadius="80%"
					outerRadius="90%"
				>
					<text 
						x={10}
						y={30}
						fill="black"
						fontWeight="bolder"
					>Score</text>
					<text fill="black" textAnchor="middle" dominantBaseline="central">
						<tspan x="52%" y="46%" fontSize="3em" fontWeight="bolder">{`${score(data) * 100}%`}</tspan>
						<tspan x="50%" y="56%" fill="grey" fontSize="1em">{"de votre"}</tspan>
						<tspan x="50%" y="61%" fill="grey" fontSize="1em">{"objectif"}</tspan>
					</text>
					<PolarAngleAxis
						type="number"
						domain={[0, 100]}
						dataKey={"value"}
						angleAxisId={0}
						tick={false}
						margin={{top: 50, bottom: 0}}
					/>
					<RadialBar 
						dataKey="score"
						fill="var(--clr-primary)"
						cornerRadius={10}
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