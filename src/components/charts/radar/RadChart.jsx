import { React } from "react";
import { 
	ResponsiveContainer,
	RadarChart,
	PolarAngleAxis,
	Radar,
	PolarGrid
} from "recharts";

import PropTypes from "prop-types";

import useFetch from "../../../js/useFetch";
import Loader from "../Loader";

const RadChart = ({ id }) => {

	const { data, loading, error} = useFetch(`${id}/performance`);

	return (
		<>
			{(loading || error )&& <Loader ld={loading} err={error}/>}

			{data &&
				<ResponsiveContainer width="100%" height="100%">

					<RadarChart data={
						data.data.map((item) => 
							({
								name: data.kind[item.kind],
								value: item.value
							}))
					}>

						<PolarGrid />
						<PolarAngleAxis dataKey="name" />
						<Radar dataKey="value" fill="var(--clr-primary)" />

					</RadarChart>
				</ResponsiveContainer>
			}
		</>
	);

};

RadChart.propTypes = {
	id: PropTypes.number.isRequired
};

export default RadChart;