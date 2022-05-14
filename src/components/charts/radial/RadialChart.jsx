import { React } from "react";
import { 
	ResponsiveContainer,
	RadialBarChart,
	RadialBar,
} from "recharts";

import PropTypes from "prop-types";

import useFetch from "../../../js/useFetch";
import Loader from "../Loader";

const score = data => data.score || data.todayScore;
const RadialChart = ({ id }) => {

	const { data, loading, error} = useFetch(`${id}`);

	return (
		<>
			{(loading || error )&& <Loader ld={loading} err={error}/>}

			{data &&
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
			}
		</>
	);

};

RadialChart.propTypes = {
	id: PropTypes.number.isRequired
};

export default RadialChart;