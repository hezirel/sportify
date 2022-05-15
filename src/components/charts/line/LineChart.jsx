import { React } from "react";

import {
	ResponsiveContainer,
	LineChart,
	Line,
	Tooltip,
} from "recharts";
import PropTypes from "prop-types";

import useFetch from "../../../js/useFetch";

import Loader from "../Loader";

import "./LineChart.css";


const LinChart = ({ id }) => {

	const { data, loading, error} = useFetch(`${id}/average-sessions`);

	return (
		<>
			{(loading || error )&& <Loader ld={loading} err={error}/>}

			{data &&
					<>
						<ResponsiveContainer width="100%" height="100%">
							<LineChart
								data={data.sessions}
							>
								<Line
									dataKey="sessionLength"
									fill="red"
									strokeWidth={2}
									activeDot={{
										stroke: "red",
										strokeWidth: 10,
										r: 5,
									}}
								/>
								<Tooltip
									cursor={{
										stroke: "rgba(0, 0, 0, 0.1)",
										strokeWidth: 32,
									}}
								/>
							</LineChart>
						</ResponsiveContainer>
					</>
			}
		</>
	);

};

LinChart.propTypes = {
	id: PropTypes.number.isRequired
};

export default LinChart;